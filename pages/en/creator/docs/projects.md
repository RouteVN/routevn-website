---
template: documentation
title: Projects
seo:
  title: "Projects | RouteVN Creator Docs"
  description: "On the main page of RouteVN Creator, you will see a list of all projects You can either create a new project or import an existing project"
sidebarId: projects
---

## Projects List

On the main page of RouteVN Creator, you will see a list of all projects
You can either create a new project or import an existing project

Click any project in the list to start working with it.

## Create a Project

Click the create button to create a project

You will be asked to fill the following fields:

- Project name (required)
- Project description
- [Language](#language)
- [Resolution](#resolution) (required)
- [Icon](#icon)
- [Folder path](#folder-path) (required)

<img
  src="/public/creator/docs/reference/project-1.png"
  alt="Create project form"
  style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;" width="1920" height="1080" decoding="async"
/>

### Language

Select the language you will use to write your project. RouteVN Creator uses this setting to determine whether writing goals use word or character counts.

### Resolution

Screen resolution is a very consequential decision because it will dictate the size of all images that you will be using

Changing resolution later is tricky because it means you will need to change all your images as well

Currently the only supported resolution is 1920 x 1080 (FHD)

We will be adding more cusotmizable resolutions in the near future

<!-- Common resolutions for desktop screen are: -->
<!---->
<!-- - 1920 x 1080 (FHD) -->
<!-- - 2560 x 1440 (QHD) -->
<!-- - 4096 x 2160 (UHD 2k) -->


<!-- We do allow customization with any arbitrary resolution values. This should be able to satisfy any other use cases including mobile phone screen sizes. -->
<!---->
<!-- Technically you can also insert phone size dimensions. It will work, but some layouts may be weird, it has not been optimized for now. -->

### Icon

This is just a icon to better identify the project. You can use any image that is not too small, there will be a image cropping step to make it into a square

### Folder path

The folder path must point to an empty folder, not a file. Create an empty folder first, then select it for the project. RouteVN Creator saves all project data in this folder.


## Removing a project

From the project list, you can right click a project, and then select `Remove`

**Important** Removing the project will only remove it from the list. If you want to delete the files, you have to delete the whole folder manually

## Importing a project

You can click the import button and select a folder path.
After a successful import, the project will appear in the projects list.

You cannot import an already imported project.

## Project Details

In the project page you click at the title or other fields to edit.

<img
  src="/public/creator/docs/reference/project-2.png"
  alt="Project page"
  style="width: 100%; height: auto; display: block; border: 1px solid var(--border); box-sizing: border-box;" width="1920" height="1080" decoding="async" loading="lazy"
/>

## Troubleshooting

If you see an error dialog when trying to open a project, it usually means you are not using the latest version of RouteVN Creator.

- Upgrade to the latest version of RouteVN Creator.
- Try opening the project again.
- If it still fails, reach out to [RouteVN support](/en/creator/docs/introduction/#support).
