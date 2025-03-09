function getAmountBasedOnPage() {
    let currentPage = window.location.pathname.split("/").pop().replace(".html", ""); // Get the current page filename
    let amount;

    if (currentPage === "Replacement") {
        amount = 1385;
    }else if(currentPage == "track"){
        amount = 1078
    }else if(currentPage == "color"){
        amount = 1293
    }else if(currentPage == "heavy"){
        amount = 1475
    }
    else {
        amount = 1499
    }

    return amount;
}

function generateQRCode() {
    let qrCanvas = document.getElementById("qrcode");
    let amount = getAmountBasedOnPage();
    let upiID = "q691189069@ybl"; // Replace with your actual UPI ID
    let payeeName = "Ankit Kumar Mishra"; // Your business name

    // UPI Payment Link
    let upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`;

    // Set a fixed size for the QR code
    let qr = new QRious({
        element: qrCanvas,
        value: upiURL,
        size: 300
    });

    // Convert QR code to image
    let qrImage = document.getElementById("qrImage");
    let qrImageURL = qr.toDataURL("image/png");

    qrImage.src = qrImageURL;
    qrImage.style.display = "block"; // Show the image
}


generateQRCode()
