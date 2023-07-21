var mobile = {
  Apple: {
    iphone7: {
      model: "Iphone 7",
      ram: "2 Gb",
      rom: "32Gb/64Gb/128Gb",
      camera: "12MP",
      battery: "2850mah",
      image: "images/iphone7.webp",
    },
  },
  Oppo: {
    oppof21: {
      model: "Oppo F21",
      ram: "4GB/6GB",
      rom: "64Gb/128Gb",
      camera: "48MP",
      battery: "5000mah",
      image: "images/oppo f21.jpg",
    },
  },
  Samsung: {
    A23: {
      model: "Samsung A23",
      ram: "4/6Gb",
      rom: "32Gb/64Gb/128Gb",
      camera: "108MP",
      battery: "6000mah",
      image: "images/a23.png",
    },
    A13: {
      model: "Samsung A13",
      ram: "4/6Gb",
      rom: "32Gb/64Gb/128Gb",
      camera: "48MP",
      battery: "5000mah",
      image: "images/a13.jpg",
    },
  },
  Realme: {
    RealmeC35: {
      model: "Realme C35",
      ram: "4GB/6GB",
      rom: "64Gb/128Gb",
      camera: "48MP",
      battery: "5000mah",
      image: "images/realme c35.webp",
    },
  },
};

// console.log(mobile);
var x = Object.keys(mobile);
var y = Object.values(mobile);
// console.log(x);
// console.log(y);
var brand = document.getElementById("brands");
var model = document.getElementById("model");
var card = document.getElementById("card");
for (let i = 0; i < x.length; i++) {
  brand.innerHTML += `<option>${x[i]}</option>`;
}
var brands = () => {
  model.innerHTML = "";
  card.innerHTML = "";
  var a = `${brand.value}`;
  var b = mobile[a];
  var c = Object.keys(b);
  // console.log(c);
  for (let i = 0; i < c.length; i++) {
    var d = Object.keys(b);
    let y = Object.values(mobile[a]);
    // console.log(y);
    model.innerHTML += `<option>${c[i]}</option>`;
    card.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${y[i].image}" style="object-fit: contain;" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Brand Name : ${y[i].model}</h5>
          <p>Ram : ${y[i].ram}</p>
          <p>Rom : ${y[i].rom}</p>
          <p>Camera : ${y[i].camera}</p>
          <p>Battery : ${y[i].battery}</p>
        </div>
      </div>`;
  }
};
var models = () => {
  console.log(model.value);
  var a = `${brand.value}`;
  var b = `${model.value}`;
  var c = mobile[a][b];
  // console.log(a);
  // console.log(b);
  // console.log(c);
  card.innerHTML = "";
  card.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${c.image}" class="card-img-top" style="object-fit: contain;" alt="...">
        <div class="card-body">
          <h5 class="card-title">Brand Name : ${c.model}</h5>
          <p class="card-text">Ram : ${c.ram}</p>
          <p class="card-text">Rom : ${c.rom}</p>
          <p class="card-text">Camera : ${c.camera}</p>
          <p class="card-text">Battery : ${c.battery}</p>
        </div>
      </div>`;
};
