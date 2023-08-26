// Get the button element
const enableNotificationsButton = document.getElementById("enable-notifications");

// Add a click event listener to the button
enableNotificationsButton.addEventListener("click", () => {
  // Check if the browser supports notifications
  if ("Notification" in window) {
    // Request permission
    Notification.requestPermission()
      .then(permission => {
        if (permission === "granted") {
          // Create and show the notification
          const notification = new Notification("Notification Title", {
            body: "This is the notification message.",
            icon: "g.png"
          });
          
          notification.onclick = function() {
            // Handle the notification click event
            console.log("Notification clicked!");
          };
        }
      })
      .catch(error => {
        console.error("Error requesting notification permission:", error);
      });
  } else {
    console.log("This browser does not support notifications.");
  }
});
