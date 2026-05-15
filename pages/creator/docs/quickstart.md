---
template: documentation
title: Quickstart
sidebarId: quickstart
---

## Install

Download the latest version of RouteVN Creator from the [download page](/creator/download/).

### Windows

- After downloading the `.exe` file, execute it and follow the instructions. Installation should be straighforward.
- Windows SmartScreen may show a warning that it is an unrecognized app. This can happen when RouteVN Creator does not have many downloads. The warning is supposed to disappear once enough users download and install it.

- You can manually inspect the certificate by:
  - Right click the installer icon
  - Properties
  - Certificates
  - It should show that it is signed by **Yuusoft Pte. Ltd.** with Certum

### macOS

- After downloading the `.dmg` file, double click it
- Drag the RouteVN Creator icon into the Applications folder
- You can now run it directly from the Applications folder or any application launcher

### Linux

RouteVN Creator for Linux is distributed as an AppImage. An AppImage can run without a system-wide installation.

1. Download the `.AppImage` file from the [download page](/creator/download/).
2. Optional: download the `.sha256` checksum file into the same folder as the AppImage, then verify it.

   ```sh
   sha256sum -c "RouteVN Creator_{version number}_amd64.AppImage.sha256"
   ```

   The command checks the AppImage listed in the checksum file. If it says `FAILED`, delete the downloaded files and download them again.

3. Make the AppImage executable.

   ```sh
   chmod +x "RouteVN Creator_{version number}_amd64.AppImage"
   ```

4. Run the AppImage.

   ```sh
   ./"RouteVN Creator_{version number}_amd64.AppImage"
   ```

## Data storage

RouteVN stores data locally in order to work properly. For example it has to save the user configuration and settings.

Storaged data is split into `Application data` and `Project data`:

### Application data

This is global configuration managed by the RouteVN Creator application. It is stored in the following locations:

- Windows: `C:\Users\<your-user>\AppData\Roaming\com.routevn.creator`
- macOS: `~/Library/Application Support/com.routevn.creator`
- Linux: `~/.config/com.routevn.creator`

These are the default locations. You may have changed this during installation.

### Project data

Each project points to a path. This path can be anywhere as long as the user has access to that path.

Each project has one path, and all project specific data will be stored in this folder

If you need to run the project in another device. What you would do is to copy this entire folder to the other device and import it as a project.

It is **strongly recommended that you make backups of the project folder** so that you will not lose your project data during a dataloss incident

## After installation

After successful installation and open the application, you will be on the projects list page.

The first time you should see an empty list of projects, but it means the application is runninig successfully.

Proceed to the [Projects guide](/creator/docs/projects) to create your first project

## Updating the application

RouteVN Creator is under active development and you should expect to see updates every week.

You can check the [Changelog](/creator/changelog/) for the full list of updates

Below is how you can get the latest version:

- RouteVN Creator regularly checks for updates automatically. If a new version is available, it will notify you to install the latest version. This check works only if you are conneced to the internet.

- If you wish to check for updates manually, or to make sure you are on the latest version, you can go to:
  - Go to a project
  - Click settings tab
  - Click 'Check for updates'
  - If there is a new version avaialble, it will ask you to update, otherwise it will just tell you that you're already on the latest version


Once you are done with the quickstart, continue to the [Page Index](/creator/docs/page-index/) to explore the rest of the documentation.
