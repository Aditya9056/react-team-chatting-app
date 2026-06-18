# React Team Chat App

Archived React chat demo built with Create React App and ChatEngine.

## Structure

- `src/components/` - chat UI components.
- `src/config/chatEngine.js` - ChatEngine project and demo-user configuration.
- `src/assets/` - app sound assets.
- `public/` - static CRA public assets.
- `docs/demo/` - preserved demo screenshots and recordings from the local machine.

## Preserved Demo Assets

The local demo screenshots and recordings are preserved in Git so the archived
project can be reviewed without keeping loose Finder-only files:

- `docs/demo/project-cover.jpg`
- `docs/demo/screencast 2023-10-01 04-24-19.gif`
- `docs/demo/inAction.mp4`
- `docs/demo/screencast 2023-10-01 04-24-19.mp4`
- `docs/demo/screencast 2023-10-01 04-41-44.mp4`

## Local Development

```bash
npm install
npm start
```

The ChatEngine project id and demo credentials are centralized in `src/config/chatEngine.js` so archived local changes are easier to audit.
