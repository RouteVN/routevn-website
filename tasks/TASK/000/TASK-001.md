---
title: Create changelog page
status: done
assignee: han4wluc
priority: medium
---

# Description

design:
- left side there is version name and date
- right side there is a title and a full markdown content

can make it mostly similar to this: https://demo.openchangelog.com/

routes will be:

- `/creator/changelog/` full change log that can scroll multiple ones. clicking on the title will goto the specific item
- `/creator/changelog/v1-0-1` changelog only for that version. this page needs to have a back button that will go to `/creator/changelog/`

