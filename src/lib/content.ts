export const company = {
  name: "Apex Plumbing London",
  phoneRaw: "02012345678",
  phoneDisplay: "020 1234 5678",
  email: "hello@apexplumbinglondon.co.uk",
  city: "London",
  postcode: "SW1A 1AA",
  addressLine: "58 Great Portland Street, London, W1W 7LQ",
  openingHours: "24/7 Emergency Response",
  rating: "4.9/5 from 286 verified reviews",
  responsePromise: "Average emergency response: 45 minutes"
};

export type ServiceKey =
  | "emergency-plumber"
  | "boiler-repair"
  | "blocked-drains"
  | "leak-detection"
  | "boiler-service"
  | "boiler-installation"
  | "power-flushing";

export type Service = {
  key: ServiceKey;
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  heroSubheadline: string;
  firstVisitStat: string;
  process: string[];
  pricing: {
    callout: string;
    typicalRange: string;
    note: string;
  };
  faqs: { question: string; answer: string }[];
  relatedServices: ServiceKey[];
  relatedAreas: string[];
};

export const services: Service[] = [
  {
    key: "emergency-plumber",
    slug: "emergency-plumber-london",
    title: "Emergency Plumber London",
    shortTitle: "Emergency Plumbing",
    summary: "Urgent plumbing repairs for leaks, burst pipes, and sudden breakdowns.",
    heroSubheadline:
      "Local engineers on standby across London, day and night, with transparent callout pricing.",
    firstVisitStat: "87% of emergency issues fixed on first visit.",
    process: ["Immediate phone triage", "Fast dispatch", "On-site diagnosis", "Repair + safety check"],
    pricing: {
      callout: "From £89",
      typicalRange: "Most emergency fixes: £120 to £380",
      note: "Final quote confirmed after diagnosis before major work starts."
    },
    faqs: [
      {
        question: "How quickly can you reach me?",
        answer:
          "For most London postcodes, we target arrival within 45 to 90 minutes depending on traffic and job load."
      },
      {
        question: "Do you charge more at night?",
        answer:
          "Out-of-hours rates can apply. We always confirm any rate difference before dispatching an engineer."
      },
      {
        question: "Can you handle commercial callouts?",
        answer: "Yes. We support offices, retail sites, and mixed-use properties with urgent plumbing issues."
      },
      {
        question: "Will I get a quote before work starts?",
        answer: "Yes. You receive a clear breakdown and approval request before major repairs begin."
      },
      {
        question: "Do you carry common parts?",
        answer:
          "Our vans are stocked for common emergency repairs to increase the chance of same-visit resolution."
      },
      {
        question: "Is your work guaranteed?",
        answer:
          "All repair work is covered by our workmanship guarantee. Parts warranties depend on manufacturer terms."
      }
    ],
    relatedServices: ["blocked-drains", "leak-detection"],
    relatedAreas: ["camden", "islington"]
  },
  {
    key: "boiler-repair",
    slug: "boiler-repair-london",
    title: "Boiler Repair London",
    shortTitle: "Boiler Repair",
    summary: "Rapid boiler diagnostics and repairs to restore heat and hot water safely.",
    heroSubheadline: "Gas Safe engineers for combi, system, and conventional boiler faults.",
    firstVisitStat: "82% of boiler faults resolved without a second visit.",
    process: ["Fault code review", "System checks", "Repair options", "Safety and pressure test"],
    pricing: {
      callout: "From £99",
      typicalRange: "Most boiler repairs: £140 to £520",
      note: "Where parts are needed, we quote full supply and fitting costs upfront."
    },
    faqs: [
      {
        question: "Do you repair all boiler brands?",
        answer: "We work with major UK brands including Worcester Bosch, Vaillant, Ideal, and Baxi."
      },
      {
        question: "Can you repair boiler pressure problems?",
        answer:
          "Yes. Low or dropping pressure is one of the most common issues we diagnose and resolve."
      },
      {
        question: "Do I need a replacement instead of repair?",
        answer:
          "Not always. We provide clear repair-vs-replace guidance based on fault severity, age, and efficiency."
      },
      {
        question: "Are your engineers Gas Safe registered?",
        answer: "Yes. Boiler repair and gas work are only carried out by Gas Safe registered engineers."
      },
      {
        question: "Do you offer emergency boiler repairs?",
        answer:
          "Yes. We prioritise no-heat and no-hot-water cases, especially for vulnerable households."
      },
      {
        question: "Will I receive a report after repair?",
        answer: "Yes. We provide a brief completion summary including what was fixed and any follow-up advice."
      }
    ],
    relatedServices: ["boiler-service", "boiler-installation"],
    relatedAreas: ["hackney", "westminster"]
  },
  {
    key: "blocked-drains",
    slug: "blocked-drains-london",
    title: "Blocked Drains London",
    shortTitle: "Blocked Drains",
    summary: "Drain unblocking for sinks, toilets, and external lines with minimal disruption.",
    heroSubheadline: "From recurring sink blockages to urgent overflow risks, we clear and investigate fast.",
    firstVisitStat: "91% drain issues cleared on first attendance.",
    process: ["Symptoms check", "Access inspection", "Mechanical or jetting clear", "Flow test and advice"],
    pricing: {
      callout: "From £85",
      typicalRange: "Typical drain clear jobs: £95 to £290",
      note: "CCTV diagnostics quoted separately when required."
    },
    faqs: [
      {
        question: "Can you clear both internal and external drains?",
        answer: "Yes. We handle kitchen, bathroom, soil stack, and outdoor drainage blockages."
      },
      {
        question: "Do recurring blockages need CCTV?",
        answer:
          "If a blockage returns frequently, a CCTV survey helps identify root causes like scale, damage, or roots."
      },
      {
        question: "Will unblocking damage my pipes?",
        answer:
          "No. We use method-appropriate tools and adjust pressure levels to protect older pipework."
      },
      {
        question: "Can you attend same day?",
        answer: "Yes. Most blocked drain callouts are scheduled same day, with emergency options available."
      },
      {
        question: "Do you clean up after work?",
        answer:
          "Yes. We leave the area tidy and explain prevention steps to reduce future blockages."
      },
      {
        question: "Are commercial drain jobs covered?",
        answer: "Yes. We support cafes, offices, and retail units with urgent and planned drainage work."
      }
    ],
    relatedServices: ["emergency-plumber", "leak-detection"],
    relatedAreas: ["greenwich", "lambeth"]
  },
  {
    key: "leak-detection",
    slug: "leak-detection-london",
    title: "Leak Detection London",
    shortTitle: "Leak Detection",
    summary: "Targeted leak detection to identify hidden water loss without unnecessary damage.",
    heroSubheadline: "Fast tracing for concealed pipe leaks, damp hotspots, and unexplained pressure drops.",
    firstVisitStat: "88% of hidden leak sources identified on first survey.",
    process: ["System isolation", "Non-invasive tracing", "Cause confirmation", "Repair recommendation"],
    pricing: {
      callout: "From £109",
      typicalRange: "Most leak investigations: £150 to £430",
      note: "Repair costs depend on location and access complexity."
    },
    faqs: [
      {
        question: "Can you find leaks behind walls and floors?",
        answer:
          "Yes. We use non-invasive methods first to locate likely leak sources before opening surfaces."
      },
      {
        question: "Do you provide insurance-friendly reports?",
        answer:
          "Yes. We can provide clear findings summaries to support your insurer conversation."
      },
      {
        question: "What if you cannot find the leak immediately?",
        answer:
          "We explain what has been ruled out and propose next-step diagnostics with transparent costs."
      },
      {
        question: "Can you repair the leak once found?",
        answer: "Yes. Where feasible we can repair immediately or schedule a follow-up with required parts."
      },
      {
        question: "Is leak detection available for landlords?",
        answer:
          "Yes. We handle occupied rentals, void properties, and urgent tenant-reported issues."
      },
      {
        question: "Do I need to turn off water before you arrive?",
        answer:
          "If there is active major leaking, turn off the stopcock if safe to do so and call us immediately."
      }
    ],
    relatedServices: ["emergency-plumber", "blocked-drains"],
    relatedAreas: ["camden", "lambeth"]
  },
  {
    key: "boiler-service",
    slug: "boiler-service-london",
    title: "Boiler Service London",
    shortTitle: "Boiler Service",
    summary: "Annual boiler servicing to maintain efficiency, safety, and warranty compliance.",
    heroSubheadline: "Planned maintenance that helps prevent winter breakdowns and costly repairs.",
    firstVisitStat: "97% of annual services completed in one visit.",
    process: ["Visual checks", "Combustion analysis", "Component inspection", "Service record update"],
    pricing: {
      callout: "Fixed visit pricing available",
      typicalRange: "Annual service: £95 to £140",
      note: "Any repair recommendations are quoted separately."
    },
    faqs: [],
    relatedServices: ["boiler-repair", "boiler-installation"],
    relatedAreas: ["hackney", "greenwich"]
  },
  {
    key: "boiler-installation",
    slug: "boiler-installation-london",
    title: "Boiler Installation London",
    shortTitle: "Boiler Installation",
    summary: "Energy-efficient boiler installation with correct sizing and clean system setup.",
    heroSubheadline: "We help you choose the right boiler for your property, usage, and budget.",
    firstVisitStat: "1 to 2 day average installation timeline for like-for-like swaps.",
    process: ["Home assessment", "System design", "Installation", "Commissioning and handover"],
    pricing: {
      callout: "Survey-based pricing",
      typicalRange: "Typical installs: £1,900 to £3,800",
      note: "Final quote varies by boiler model, controls, and flue requirements."
    },
    faqs: [],
    relatedServices: ["boiler-service", "boiler-repair"],
    relatedAreas: ["islington", "westminster"]
  },
  {
    key: "power-flushing",
    slug: "power-flushing-london",
    title: "Power Flushing London",
    shortTitle: "Power Flushing",
    summary: "System cleaning to improve heating performance and protect boiler lifespan.",
    heroSubheadline: "Ideal for cold radiators, noisy systems, and poor circulation issues.",
    firstVisitStat: "Average heating efficiency improvement reported by customers: 22%.",
    process: ["System inspection", "Targeted flushing", "Inhibitor protection", "Performance checks"],
    pricing: {
      callout: "Quoted by system size",
      typicalRange: "Most power flush jobs: £380 to £720",
      note: "Price depends on radiator count and system condition."
    },
    faqs: [],
    relatedServices: ["boiler-service", "boiler-repair"],
    relatedAreas: ["camden", "hackney"]
  }
];

export type AreaServicePage = {
  areaSlug: string;
  areaName: string;
  serviceKey: ServiceKey;
  serviceRouteSegment: string;
  title: string;
  intro: string;
  localScenarios: string[];
  recentJobs: { title: string; detail: string }[];
  faq: { question: string; answer: string }[];
};

export const areaServicePages: AreaServicePage[] = [
  {
    areaSlug: "camden",
    areaName: "Camden",
    serviceKey: "emergency-plumber",
    serviceRouteSegment: "emergency-plumber",
    title: "Emergency Plumber Camden",
    intro:
      "Rapid emergency plumbing support for Camden flats, townhouses, and rental properties.",
    localScenarios: [
      "Burst pipes in converted period properties",
      "Tenant leak emergencies in managed flats",
      "Urgent stopcock and pressure failures"
    ],
    recentJobs: [
      {
        title: "Morning leak in NW1 flat",
        detail: "Located hidden leak under kitchen unit and restored supply in under 2 hours."
      },
      {
        title: "Burst pipe in Camden Town terrace",
        detail: "Isolated line, replaced damaged section, and completed safety checks same visit."
      }
    ],
    faq: [
      {
        question: "Do you cover all of Camden?",
        answer: "Yes, including Camden Town, Kentish Town, and surrounding postcodes."
      },
      {
        question: "Can you help with landlord emergency jobs?",
        answer: "Yes. We coordinate with agents, tenants, and owners for urgent attendance."
      }
    ]
  },
  {
    areaSlug: "islington",
    areaName: "Islington",
    serviceKey: "emergency-plumber",
    serviceRouteSegment: "emergency-plumber",
    title: "Emergency Plumber Islington",
    intro:
      "24/7 emergency plumbing support for Islington homes and small businesses.",
    localScenarios: [
      "Night-time leak callouts in apartment blocks",
      "Hot water loss in family homes",
      "Urgent valve and toilet failures"
    ],
    recentJobs: [
      {
        title: "Angel high-rise emergency repair",
        detail: "Resolved leaking inlet valve and stopped ceiling water ingress within same callout."
      },
      {
        title: "Clerkenwell no-water incident",
        detail: "Diagnosed failed pressure-reducing valve and restored safe flow."
      }
    ],
    faq: [
      {
        question: "How fast is response in Islington?",
        answer: "Typical response is 45 to 75 minutes based on demand and traffic."
      },
      {
        question: "Do you offer proof of work completed?",
        answer: "Yes. We share a concise completion summary and recommendations."
      }
    ]
  },
  {
    areaSlug: "hackney",
    areaName: "Hackney",
    serviceKey: "boiler-repair",
    serviceRouteSegment: "boiler-repair",
    title: "Boiler Repair Hackney",
    intro:
      "Gas Safe boiler fault diagnosis and repairs across Hackney with clear pricing.",
    localScenarios: [
      "No heating in Victorian terraces",
      "Combi pressure faults in modern flats",
      "Ignition and thermostat issues"
    ],
    recentJobs: [
      {
        title: "E8 winter no-heat callout",
        detail: "Replaced ignition component and restored full function the same evening."
      },
      {
        title: "Hackney Wick pressure loss issue",
        detail: "Found slow seep leak and stabilised system pressure with targeted repair."
      }
    ],
    faq: [
      {
        question: "Can you repair older boilers in Hackney homes?",
        answer: "Yes, where parts availability allows. We also advise if replacement is smarter."
      },
      {
        question: "Are evening appointments available?",
        answer: "Yes, subject to engineer capacity and urgency level."
      }
    ]
  },
  {
    areaSlug: "westminster",
    areaName: "Westminster",
    serviceKey: "emergency-plumber",
    serviceRouteSegment: "emergency-plumber",
    title: "Emergency Plumber Westminster",
    intro:
      "Priority emergency plumbing coverage for Westminster residences and commercial units.",
    localScenarios: [
      "High-pressure leaks in listed buildings",
      "Commercial washroom failures",
      "Overflow and drainage incidents"
    ],
    recentJobs: [
      {
        title: "W1 office washroom emergency",
        detail: "Stopped active leak and replaced failed component before business hours."
      },
      {
        title: "Pimlico apartment burst flexi hose",
        detail: "Emergency isolation, replacement, and damage-limiting recommendations delivered."
      }
    ],
    faq: [
      {
        question: "Do you handle out-of-hours commercial issues?",
        answer: "Yes. We can respond to urgent issues outside standard office hours."
      },
      {
        question: "Can you work in managed blocks?",
        answer: "Yes. We coordinate with building management where access controls apply."
      }
    ]
  },
  {
    areaSlug: "greenwich",
    areaName: "Greenwich",
    serviceKey: "blocked-drains",
    serviceRouteSegment: "blocked-drains",
    title: "Blocked Drains Greenwich",
    intro:
      "Same-day blocked drain response in Greenwich for homes, rentals, and small business sites.",
    localScenarios: [
      "Recurring kitchen sink blockages",
      "Ground-floor toilet backing up",
      "External drain flow issues"
    ],
    recentJobs: [
      {
        title: "SE10 repeated sink block",
        detail: "Cleared build-up and corrected trap setup to reduce repeat incidents."
      },
      {
        title: "Greenwich retail unit drainage issue",
        detail: "Emergency clear and flow test completed before opening hours."
      }
    ],
    faq: [
      {
        question: "Can you investigate recurring drain problems?",
        answer: "Yes. We can recommend CCTV survey if repeat issues suggest deeper faults."
      },
      {
        question: "Do you offer prevention advice?",
        answer: "Yes. Every visit includes practical guidance to lower re-block risk."
      }
    ]
  },
  {
    areaSlug: "lambeth",
    areaName: "Lambeth",
    serviceKey: "leak-detection",
    serviceRouteSegment: "leak-detection",
    title: "Leak Detection Lambeth",
    intro:
      "Fast leak tracing in Lambeth for hidden water loss, damp patches, and pressure drop issues.",
    localScenarios: [
      "Concealed pipe leaks in period conversions",
      "Unexplained damp in upper-floor flats",
      "Water pressure loss with no obvious source"
    ],
    recentJobs: [
      {
        title: "SW9 hidden bathroom leak",
        detail: "Traced leak behind tiled wall and planned low-disruption repair route."
      },
      {
        title: "Brixton pressure-drop case",
        detail: "Identified slow manifold leak and supplied insurer-friendly findings summary."
      }
    ],
    faq: [
      {
        question: "Will you need to break walls to find a leak?",
        answer:
          "We start with non-invasive tracing and only recommend opening surfaces when evidence confirms location."
      },
      {
        question: "Can you support insurance claims?",
        answer:
          "Yes. We can provide written findings to support your insurer process."
      }
    ]
  }
];

export const blogPosts = [
  {
    slug: "no-hot-water-london-checks",
    title: "No Hot Water in London? 7 Checks to Do Before Calling a Plumber",
    category: "Problem-Aware",
    excerpt:
      "A practical first-response checklist to help homeowners identify simple hot water issues safely."
  },
  {
    slug: "boiler-pressure-keep-dropping",
    title: "Why Your Boiler Pressure Keeps Dropping and What It Means",
    category: "Problem-Aware",
    excerpt: "Learn the common causes of pressure loss and when to call a Gas Safe engineer."
  },
  {
    slug: "blocked-drain-warning-signs",
    title: "Blocked Drain Warning Signs London Homeowners Shouldn’t Ignore",
    category: "Problem-Aware",
    excerpt: "Spot early blockage symptoms before they become expensive emergency repairs."
  },
  {
    slug: "hidden-water-leak-signs",
    title: "Water Leak Behind Walls: Early Signs and Immediate Actions",
    category: "Problem-Aware",
    excerpt:
      "Understand the warning signs of concealed leaks and how to limit property damage quickly."
  },
  {
    slug: "emergency-plumbing-cost-london-2026",
    title: "How Much Does Emergency Plumbing Cost in London in 2026?",
    category: "Commercial-Intent",
    excerpt: "Realistic cost ranges, callout fee expectations, and factors that change final pricing."
  },
  {
    slug: "boiler-repair-vs-replacement",
    title: "Boiler Repair vs Boiler Replacement: Which Saves More in the Long Run?",
    category: "Commercial-Intent",
    excerpt: "Compare lifetime costs, breakdown risk, and efficiency to choose the better option."
  },
  {
    slug: "best-time-book-boiler-service",
    title: "Best Time to Book a Boiler Service in London (and Typical Pricing)",
    category: "Commercial-Intent",
    excerpt: "Plan your service before peak season and avoid emergency winter callouts."
  },
  {
    slug: "gas-safe-registration-home-safety",
    title: "What Gas Safe Registration Means for Your Home Safety",
    category: "Trust-Building",
    excerpt: "Why certification matters and how it protects your property and household."
  },
  {
    slug: "our-emergency-response-process",
    title: "Our Emergency Plumbing Response Process: What Happens After You Call",
    category: "Trust-Building",
    excerpt: "A transparent step-by-step guide to how we assess, quote, and fix urgent jobs."
  },
  {
    slug: "camden-leak-detection-case-study",
    title: "Case Study: Same-Day Leak Detection in a Camden Flat",
    category: "Trust-Building",
    excerpt:
      "How we located and resolved a hidden leak fast while minimizing disruption for the tenant."
  }
];

export const universalFaqs = [
  {
    question: "Do you offer 24/7 emergency plumbing in London?",
    answer:
      "Yes. Emergency support is available 24/7 across London with priority dispatch for urgent water and heating failures."
  },
  {
    question: "Can I get a quote before work starts?",
    answer:
      "Yes. We provide transparent pricing before major work begins, so you can approve costs with confidence."
  },
  {
    question: "Are you insured and certified?",
    answer:
      "Yes. Apex Plumbing London is fully insured, and boiler or gas-related work is performed by Gas Safe registered engineers."
  },
  {
    question: "Do you cover landlords and letting agents?",
    answer:
      "Yes. We support homeowner, landlord, and managed property jobs including tenant coordination."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major cards and bank transfer. Payment details are confirmed in your quote."
  },
  {
    question: "Do you provide guarantees?",
    answer:
      "Yes. We include a workmanship guarantee on completed repair work, with parts warranty according to manufacturer terms."
  }
];

export const testimonials = [
  {
    name: "R. Shaw",
    area: "Islington",
    service: "Emergency Plumbing",
    rating: 5,
    quote:
      "Arrived in around 40 minutes and fixed a serious kitchen leak before it spread. Clear price and zero hassle.",
    date: "February 2026"
  },
  {
    name: "M. Patel",
    area: "Hackney",
    service: "Boiler Repair",
    rating: 5,
    quote:
      "Heating was back the same evening. Engineer explained the fault clearly and gave practical maintenance advice.",
    date: "January 2026"
  },
  {
    name: "T. Lawrence",
    area: "Camden",
    service: "Leak Detection",
    rating: 5,
    quote:
      "Found a hidden leak behind the wall without unnecessary damage. Very professional from call to completion.",
    date: "March 2026"
  }
];

export const trustBadges = [
  "Gas Safe Registered",
  "Fully Insured Engineers",
  "24/7 Emergency Response",
  "Transparent Pricing Promise",
  "Verified London Reviews"
];

export const ctaVariants = [
  "Call Emergency Plumber Now",
  "Get a Fast Quote",
  "Check Earliest Availability",
  "Book a Boiler Repair",
  "Speak to a Local Engineer"
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceByKey(key: ServiceKey) {
  return services.find((service) => service.key === key);
}

export function getAreaServicePage(area: string, serviceSegment: string) {
  return areaServicePages.find(
    (entry) => entry.areaSlug === area && entry.serviceRouteSegment === serviceSegment
  );
}
