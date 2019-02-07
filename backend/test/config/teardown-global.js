module.exports = async () => {
  console.log('\n\n🔥🔥🔥 TEARDOWN 🔥🔥🔥\nClosing server...');

  try {
    global.httpServer.close(() => {
      console.log('\n\n✔️✔️✔️ Server closed ✔️✔️✔️');
      process.exit();
    });
  } catch (error) {
    throw new Error('\n\n❌❌❌ Error closing server ❌❌❌\n', error.message);
  }
}