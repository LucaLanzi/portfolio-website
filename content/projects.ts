import type { Project } from "@/lib/types";

/**
 * Curated, hand-picked project highlights — separate from the auto-pulled
 * GitHub grid. `images` feeds the swipeable image carousel on each card;
 * add real photos to public/portfolio/ and list them here once available.
 */
export const projects: Project[] = [
  {
    slug: "scales",
    title: "SCALES",
    org: "Bronco Space Lab / NASA JPL",
    summary:
      "Fault-tolerant satellite subsystem — power PCB, Linux-based ARM SOM carrier board, and F´ flight software.",
    description: [
      "Designed, tested, and implemented a fault-tolerant power-supply PCB and a custom Linux-based ARM SOM carrier board for a mission-specific satellite subsystem, including high-speed routing and skew tuning for timing-sensitive interfaces.",
      "Built the meta-scales-leviathan Yocto BSP for a PHYTEC i.MX8QXP SOM, modifying the Linux kernel, device tree, and U-Boot configuration to separate the Linux console from a dedicated F´ GDS communications UART.",
      "Migrated the fprime-scales-ref flight-software deployment from F´ 3.6.3 to F´ 4.2.2, integrating F´ data products, topology, and downlink handling, and validated designs in Cadence OrCAD X, LTspice, and ngspice prior to hardware bring-up.",
    ],
    images: [
      "/portfolio/scales/01-bench-setup.webp",
      "/portfolio/scales/02-board-top.webp",
      "/portfolio/scales/03-board-bottom.webp",
      "/portfolio/scales/04-fprime-topology.webp",
      "/portfolio/scales/05-fprime-comm-architecture.webp",
      "/portfolio/scales/06-software-releases.png",
    ],
    videoUrl: "https://youtu.be/couJlSxT0MU",
    tags: ["PCB Design", "Embedded Linux", "F´ Flight Software", "Yocto/BitBake"],
    repos: [
      { label: "scales-hardware", url: "https://github.com/BroncoSpace-Lab/scales-hardware" },
      { label: "scales-firmware", url: "https://github.com/BroncoSpace-Lab/scales-firmware" },
      { label: "fprime-scales-ref", url: "https://github.com/BroncoSpace-Lab/fprime-scales-ref" },
      { label: "scales-docs", url: "https://github.com/BroncoSpace-Lab/scales-docs" },
    ],
  },
  {
    slug: "billee",
    title: "BILLEE",
    org: "Bronco STAR",
    summary:
      "Competition rover hardware lead — power distribution, drivetrain electronics, and F´ command-and-data-handling.",
    description: [
      "Lead hardware design for a competition rover built for the University Rover Challenge (URC), designing COTS-implementable drivetrain, power, logic, and communications subsystems, and integrating ROS for rover control.",
      "Architected a power-distribution system with isolated logic/communications, drivetrain, and arm/science battery domains, using protected high-side switching and digital current/voltage sensing on a locally programmable RP-series microcontroller.",
      "Ported the F´ command-and-data-handling stack (fprime-billee-rcm) to a Raspberry Pi Pico 2 (RP2350) using F´ 4.2.2, Zephyr RTOS, and fprime-zephyr, verifying end-to-end build, flash, and live GDS telemetry.",
      "As Project Manager, own team budget, deadlines, deliverables, and competition readiness for URC, managing sub-teams and recruitment.",
    ],
    images: [
      "/portfolio/billee/01-rover-field.jpg",
      "/portfolio/billee/02-team.jpg",
      "/portfolio/billee/03-control-module-pcb.png",
      "/portfolio/billee/04-fprime-logo.png",
    ],
    tags: ["Rover Hardware", "KiCad", "F´", "Zephyr RTOS"],
    repos: [
      { label: "billee-hardware-2027", url: "https://github.com/BroncoSpace-BILLEE/billee-hardware-2027" },
      { label: "fprime-billee-rcm", url: "https://github.com/LucaLanzi/fprime-billee-rcm" },
      { label: "URC-2027", url: "https://github.com/BroncoSpace-BILLEE/URC-2027" },
    ],
  },
  {
    slug: "obdii-pic",
    title: "OBDII Scanner",
    org: "Personal Project",
    summary: "PIC18F46K22-based OBD-II scanner for reading live vehicle diagnostics.",
    description: [
      "Built a standalone OBD-II scanner around a PIC18F46K22 microcontroller to read and display live vehicle diagnostic data.",
      // TODO: expand with more detail once you're ready — CAN/K-line interfacing, display, PID decoding, etc.
    ],
    images: ["/portfolio/obdii-pic/01-breadboard-lcd.jpg"],
    videoUrl: "https://youtube.com/shorts/5vBDcXXLx8M?feature=share",
    videoAspect: "portrait",
    tags: ["PIC Microcontroller", "Embedded C", "Automotive"],
    repos: [{ label: "OBDII_PIC", url: "https://github.com/LucaLanzi/OBDII_PIC" }],
  },
];
