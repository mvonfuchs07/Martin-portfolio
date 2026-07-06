/* ============================================================
   PROJECTS DATA FILE
   ============================================================
   This is the ONLY file you need to touch to add your own
   projects. Copy one of the blocks below, paste it above the
   closing "];", and fill in your own details.

   HOW MEDIA WORKS:
   - Put your photos in:  media/images/
   - Put your videos in:  media/videos/
   - Reference them here as "media/images/yourfile.jpg" etc.
   - First item in the "media" array is used as the card thumbnail.
   - type must be "image" or "video".
   - For video, you can add a "poster" (a still frame shown
     before the video plays) — optional but nice to have.

   category must be one of: "mechanical", "electrical", "software", "art"

   The "specs" object becomes the little data sheet in the
   project's detail view. Use whatever fields make sense —
   delete or rename any of them. Common ones:
     role, tools, materials, stack, duration, status, year
   ============================================================ */

const PROJECTS = [

  {
    id: "RC Car Chassis",
    category: "mechanical",
    title: "RC Car Chassis",
    summary: "Designed and built a custom RC car chassis from the ground up, applying principles of mechanical design, fabrication, and prototyping to create a lightweight and durable platform.",
    description:      
      "Designed and built a custom 3D-printed RC car chassis featuring a fully " +
      "custom steering mechanism and drivetrain system. Developed the mechanical " +
      "architecture in CAD, iterating through multiple prototypes to improve " +
      "strength, performance, and manufacturability. Collaborated closely with an " +
      "electrical engineering teammate who designed the vehicle's electronics and " +
      "control systems. " +
      "The project provided hands-on experience in product " +
      "design, rapid prototyping, system integration, and cross-disciplinary " +
      "engineering teamwork." ,

    specs: {
      role: "Design & build",
      materials: "PLA+ , 304SS Hardware ",
      tools: "Fusion 360, hand tools, 3D printer",
      duration: "16 Weeks",
      year: "2025"
    },
    media: [
      { type: "image", src: "media/images/car1.jpg" },
      { type: "image", src: "media/images/car2.jpg" },
      { type: "video", src: "media/videos/car12.mp4" },
      { type: "video", src: "media/videos/car13.mp4" },
      { type: "image", src: "media/images/car3.jpg" },
      { type: "image", src: "media/images/car4.jpg" },
    ]
  },

  {
    id: "Knife",
    category: "Mechanical",
    title: "Knife build",
    summary: "Custom Knife Making.",
    description:
      "This is an ongoing project that will be updated as different models are created. This project features custom designed kives from the groud up including blade and handle design, material slection, machining, heat treatment, and finishing. ",
    specs: {
      role: "Product Designer & Fabricator",
      Methods: "Custom hand jig, Custom propane Forge ",
      materials: "Steel Blanks, Handle materials",
      duration: "Ongoing",
      year: "2025-Present"
    },
    media: [
      { type: "image", src: "media/images/knife1.jpg" },
      { type: "image", src: "media/images/knife2.jpg" },
      { type: "image", src: "media/images/knife3.jpg" },
      { type: "image", src: "media/images/knife4.jpg" },
    ]
  },

  {
    id: "Ultrasonic Sensor",
    category: "software",
    title: "Ultrasonic Sensor",
    summary: "A quick project to help me learn more about how to code simple electronics.",
    description:
      "Designed and programmed an Arduino-based distance sensing system " +
      "using an ultrasonic sensor and LED indicators. " +
      "The system measures the distance to nearby objects in real time and " +
      "illuminates different colored LEDs to visually represent proximity levels.",
    specs: {
      role: "Learn and Discover",
      Materials: "Elegoo UNO R3, Beadboard, Ultrasonic Sensor",
      duration: "1 Hour",
      status: "Complete",
      year: "2026"
    },
    media: [
      { type: "image", src: "media/images/a34241cd-d88a-4eaa-8690-c7e483ab788d.jpg" },
      { type: "image", src: "media/images/c88b7689-c46f-45d7-859e-1b04fe7b14cd.jpg" },
      { type: "image", src: "media/images/d39c2a37-2635-4b86-b56e-e2c5e4a329cd.jpg" }
    ]
  },

  {
    id: "High-Voltage Generator",
    category: "electrical",
    title: "High-Voltage Generator prototype",
    summary: " A battery-powered high-voltage Generator.",
    description:
      "Designed and built a battery-powered high-voltage circuit " +
      "using a boost converter, gaining hands-on experience " +
      "with power electronics, circuit design, and prototyping.",
    specs: {
      role: "Prototype and Discover",
      materials: "Boost convertor, 9V battery, Button",
      tools: "Soldering gun, breadboard",
      year: "2025"
    },
    media: [
      { type: "image", src: "media/images/boost con.jpg" },
      { type: "video", src: "media/videos/boost con3.mp4" },
    ]
  }

];
