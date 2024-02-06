// oppg 1
for (let i = 1; i <= 50; i++) {
    console.log(i);
  }

// oppg 2
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }

  
// oppg 3
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }

//oppg 4
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }


// oppg 6
function drawRectangle(width, height) {
    if (width < 4 || height < 4) {
        console.log("Bredde og høyde må være minst 2 for å tegne et tomt rektangel.");
        return;
    }

    // Tegn toppen av rektangelet
    console.log("*".repeat(width));

    // Tegn sidene av rektangelet
    for (let i = 2; i < height; i++) {
        console.log("*" + " ".repeat(width - 4) + "*");
    }

    // Tegn bunnen av rektangelet
    console.log("*".repeat(width));
}
