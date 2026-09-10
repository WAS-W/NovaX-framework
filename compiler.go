package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
)

const repoCDN = "https://raw.githack.com/was-w/NovaX-framework/master/src/components/index.js"
const secondRepoCDN = "https://raw.githack.com/was-w/NovaX-framework/master/src/stater/state.js"
const thisdCDN = "https://raw.githack.com/was-w/NovaX-framework/master/src/router/router.js"
const fourthCDN = "https://raw.githack.com/was-w/NovaX-framework/master/src/effects/effect.js"

func main() {
	dirPtr := flag.String("dir", ".", "Project directory path")
	buildFlag := flag.Bool("build", false, "Build .nvx files to dist")
	runFlag := flag.Bool("run", false, "Run local HTTP server")
	flag.Parse()

	if !*buildFlag && !*runFlag {
		fmt.Println("Usage: novax -build to compile, novax -run to serve, or novax -build -run for both.")
		return
	}

	workDir, err := filepath.Abs(*dirPtr)
	if err != nil {
		log.Fatalf("Invalid directory path: %v", err)
	}

	distDir := filepath.Join(workDir, "dist")

	if *buildFlag {
		err = os.MkdirAll(distDir, 0755)
		if err != nil {
			log.Fatalf("Failed to create dist directory: %v", err)
		}

		files, err := ioutil.ReadDir(workDir)
		if err != nil {
			log.Fatalf("Failed to read files from %s: %v", workDir, err)
		}

		count := 0
		for _, file := range files {
			if !file.IsDir() && strings.HasSuffix(file.Name(), ".nvx") {
				convertNvxToDist(workDir, file.Name(), distDir)
				count++
			}
		}

		if count == 0 {
			fmt.Printf("Warning: No .nvx files found in: %s\n", workDir)
		}

		createDistIndexHtml(distDir)
		fmt.Println("Build completed successfully.")
	}

	if *runFlag {
		if _, err := os.Stat(distDir); os.IsNotExist(err) {
			log.Fatalf("Dist folder does not exist. Run with -build first.")
		}

		url := "http://localhost:8000"
		fmt.Printf("Server running at: %s\n", url)

		openBrowser(url)

		fs := http.FileServer(http.Dir(distDir))
		http.Handle("/", fs)
		log.Fatal(http.ListenAndServe(":8000", nil))
	}
}

func convertNvxToDist(workDir, filename, distDir string) {
	inputPath := filepath.Join(workDir, filename)
	content, err := ioutil.ReadFile(inputPath)
	if err != nil {
		log.Printf("Failed to read file %s: %v", filename, err)
		return
	}

	code := string(content)

	code = strings.Replace(code, "../src/components/index.js", repoCDN, -1)
	code = strings.Replace(code, "./src/components/index.js", repoCDN, -1)
	code = strings.Replace(code, "@components/index.js", repoCDN, -1)

	code = strings.Replace(code, "../src/state/stater.js", secondRepoCDN, -1)
	code = strings.Replace(code, "./src/state/stater.js", secondRepoCDN, -1)
	code = strings.Replace(code, "@state/stater.js", secondRepoCDN, -1)

	code = strings.Replace(code, "../src/router/router.js", thisdCDN, -1)
	code = strings.Replace(code, "./src/router/router.js", thisdCDN, -1)
	code = strings.Replace(code, "@router/router.js", thisdCDN, -1)

	code = strings.Replace(code, "../src/effects/effect.js", fourthCDN, -1)
	code = strings.Replace(code, "./src/effects/effect.js", fourthCDN, -1)
	code = strings.Replace(code, "@effects/effect.js", fourthCDN, -1)

	code = strings.Replace(code, ".nvx", ".js", -1)

	jsFileName := strings.TrimSuffix(filename, ".nvx") + ".js"
	outputPath := filepath.Join(distDir, jsFileName)

	err = ioutil.WriteFile(outputPath, []byte(code), 0644)
	if err != nil {
		log.Printf("Failed to save output file: %v", err)
	} else {
		fmt.Printf("[Converted] %s -> %s\n", filename, outputPath)
	}
}

func createDistIndexHtml(distDir string) {
	htmlContent := `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaX App</title>
</head>
<body>
    <div id="app"></div>
    <script type="module" src="./To-Do-app.js"></script>
</body>
</html>`

	indexPath := filepath.Join(distDir, "index.html")
	ioutil.WriteFile(indexPath, []byte(htmlContent), 0644)
}

func openBrowser(url string) {
	var cmd *exec.Cmd
	switch runtime.GOOS {
	case "windows":
		cmd = exec.Command("rundll32", "url.dll,FileProtocolHandler", url)
	case "darwin":
		cmd = exec.Command("open", url)
	default:
		cmd = exec.Command("xdg-open", url)
	}
	_ = cmd.Start()
}