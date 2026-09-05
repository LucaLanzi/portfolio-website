import type { SiteConfig } from "@/lib/types";

/**
 * Central content config. Every visitor-facing, user-specific value lives
 * here — components never hardcode this data. Replace the placeholder
 * values (marked TODO) with real content; no code changes required.
 */
export const siteConfig: SiteConfig = {
  name: "Luca Lanzillotta",
  role: "Electrical Engineering Student",
  school: "Cal Poly Pomona",
  tagline: "5th-Year Electrical Engineering Student · Cal Poly Pomona",
  bio: [
    "I'm a 5th-year Electrical Engineering student at Cal Poly Pomona (Minor in Mathematics), focused on flight software, embedded systems, and hardware design for spacecraft and competition robotics.",
    "I recently interned as an F´ Flight Software Engineer at NASA's Jet Propulsion Laboratory, building spacecraft flight system components in C++ and Python. At Bronco Space Lab I lead embedded systems work on SCALES, a satellite subsystem with a fault-tolerant power PCB and a custom Linux-based ARM carrier board. At Bronco STAR I lead hardware design and serve as Project Manager for BILLEE, a competition rover built for the University Rover Challenge.",
  ],
  email: "luquilanzi@gmail.com",
  githubUsername: "LucaLanzi",
  linkedinUrl: "https://www.linkedin.com/in/luca-lanzillotta-a444b9262/",
  discordUsername: ".luquito",
  resumePath: "/resume/resume.pdf",
  skills: [
    {
      category: "Hardware Design",
      items: ["KiCad", "Altium", "Multilayer PCB Layout", "Cadence OrCAD X", "LTspice", "ngspice"],
    },
    {
      category: "Embedded Software & Linux",
      items: [
        "Embedded C",
        "C++",
        "Python",
        "F´ (Fprime) Flight Software",
        "Zephyr RTOS",
        "Yocto/BitBake",
        "U-Boot",
      ],
    },
    {
      category: "Systems Engineering",
      items: ["Integration Testing", "Requirements Definition", "Design Reviews", "Technical Leadership"],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "CMake", "Bash", "MATLAB", "ROS2", "Prompt Engineering"],
    },
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "GitHub", href: "#github" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Resume", href: "#resume" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
};
