// Placeholder photos are labeled with exactly what they should show, so
// it's obvious which real photo replaces which placeholder. Replace the
// `photo` URLs (and the bracketed names/roles) once real photos and
// details are ready — nothing here is real data yet.

import CEO_ONE from "../assets/ceopicture.jpeg";
import MANAGING_DIRECTOR_PHOTO from "../assets/Managing director.jpeg";
import STAFF_PHOTO2 from "../assets/Relation officer.jpeg";
import FACILITATOR_PHOTO from "../assets/Facilitator.jpeg";
import FACILITATOR1_PHOTO from "../assets/Facilitator1.jpeg";

export const CEO = {
  name: "Rosemary Brown-Amadi",
  role:    "Chief Executive Officer",
  bio: "Leads Flawless Consulting Firm Ltd's mission to deliver flawless British-English communication training across Africa.",
  photo: CEO_ONE,
};

// Add or remove staff members here — each just needs a name, role, and
// photo. Duplicate one of these objects for every real team member.
export const STAFF = [
  { name: "Miss Immaculatta Amadi", role: "Managing Director", photo: MANAGING_DIRECTOR_PHOTO },
  { name: "Miss Juliet Ogbemudia", role: "PA/Customer Relations Officer.", photo: STAFF_PHOTO2 },
  { name: "Catherine Ogbuehi", role: "Facilitator", photo: FACILITATOR_PHOTO },
  { name: "Uche Obioma Uzoetue", role: "Facilitator", photo: FACILITATOR1_PHOTO },
];

// Five slots for staff group photos (use absolute paths pointing into /src/assets)
import GP1 from "../assets/grouppicture.jpeg";
import GP2 from "../assets/grouppictures2.jpeg";
import GP5 from "../assets/grouppictures5.jpeg";
import GP6 from "../assets/grouppictures6.jpeg";
import GP3 from "../assets/grouppictures3.jpeg";

export const STAFF_GROUP_PHOTOS = [GP1, GP2, GP5, GP6, GP3];