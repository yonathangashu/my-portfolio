export const projectsDetails = {
  ElderCircle: {
    description: "An Elden Ring inspired game developed in Unity",
    bullets: [
      "Developed an Elden Ring-inspired game using C#, .NET, Unity, and Blender",
      "Created robust multiplayer functionality, enabling seamless player interaction and collaboration on a shared server",
    ],
    github: "https://github.com/yonathangashu/Elden-Ring",
    website: "",
    techList: ["CSharp", "Unity"],
  },
  RayCaster: {
    description: "Wolfenstein-Style Raycaster",
    bullets: [
      "Developed a 3D game rendering engine using C++ and SDL2, inspired by the classic game Wolfenstein 3D",
      "Implemented a basic raycasting algorithm to simulate 3D environments in a 2D space, handling wall rendering, collision detection, player movement, and texturing",
    ],
    github: "https://github.com/yonathangashu/raycaster",
    website: "",
    techList: ["C++"],
  },
} as const;
