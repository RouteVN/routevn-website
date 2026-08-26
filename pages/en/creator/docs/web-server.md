---
template: documentation
title: Web Server
seo:
  title: "Web Server | RouteVN Creator Docs"
  description: "Web Server lets you preview an exported web build in a real browser. It is a convenience tool."
sidebarId: web-server
---

Web Server lets you preview an exported web build in a real browser.
It is a convenience tool.

Use it after you create a [version](/en/creator/docs/versions/) and export the web version.
This lets you check the final exported project before uploading it to a publishing platform.

## Previewing a web export

To preview a web export:

1. Create a version from [Versions](/en/creator/docs/versions/).
2. Export the version for web.
3. Extract the exported Zip file.
4. Open `Release` -> `Web Server`.
5. Click `Add`.
6. Select the extracted web export folder.

RouteVN Creator will start the web server automatically after you select the folder.

The server item shows the folder name, status, folder path, and URL.

## Opening the preview

To open the preview:

- Click `Open with browser` if it is available.
- Or click `Copy URL`, then paste the URL into your browser.

## Stopping and restarting

Click `Stop` to stop a running web server.

Click `Start` to start a stopped web server again.

## Serving manually

If you are familiar with software development tools, you can serve the exported static files with your own tools.
