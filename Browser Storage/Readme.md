# Browser Storage

- Local Storage
- Session Storage
- Cookies
- Index DB

## Index DB

How WhatsApp Web and Teams Work Even Offline and Persist Data After a Browser Restart

Have you ever wondered how these large-scale apps store data that persists even after closing tabs or browser sessions?

In web applications, using caching to store data locally improves the overall user experience. Apps like these even cache photos and videos locally. But you can't store such large data in Local Storage, and Cookies and Session Storage don't persist after closing the tab.

Here's our hero: "IndexedDB"!

IndexedDB is a client-side storage solution for persistent data. It can store a significantly large amount of data. It is a transactional database like an SQL-based RDBMS, but unlike RDBMS, it uses key-value pairs to store the data. For high performance, indexes can be created to search data efficiently. It is asynchronous, so it doesn't block the application.

It also follows the same-origin policy, though developers need to think about encryption, XSS, authentication, and data cleanup on logout. As it's not protected from physical access by default, sensitive data shouldn't be stored.

The best use case is for applications that need to store a huge history of user data, like WhatsApp Web, Teams, and Google Docs.

There are wrappers built around IndexedDB, such as Dexie.js, to make it easier to use.
