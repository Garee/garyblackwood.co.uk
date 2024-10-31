---
slug: 'pytodoist'
title: 'PyTodoist'
description: 'A Python package for the Todoist API.'
date: '2015-03-29'
tags: ['project', 'python']
project: true
linkUrl: 'https://pypi.org/project/pytodoist'
githubUrl: 'https://github.com/Garee/pytodoist'
---

PyTodoist is a Python package for interacting with Todoist. It hides the underlying API calls with higher-level abstractions that make it easy to use Todoist with Python.

This project ultimately led to me be being offered a job by the founder of Todoist during 2015.

```python
>>> from pytodoist import todoist
>>> user = todoist.login('gary@garyblackwood.co.uk', 'pa$$w0rd')
>>> projects = user.get_projects()
>>> for project in projects:
...     print(project.name)
...
Inbox
Books to read
Movies to watch
Shopping
Work
Personal
Health
>>> inbox = user.get_project('Inbox')
>>> task = inbox.add_task('Install PyTodoist',
...                        priority=todoist.Priority.VERY_HIGH)
>>> task.complete()
```
