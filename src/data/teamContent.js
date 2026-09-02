// Placeholder photos are labeled with exactly what they should show, so
// it's obvious which real photo replaces which placeholder. Replace the
// `photo` URLs (and the bracketed names/roles) once real photos and
// details are ready — nothing here is real data yet.

import CEO_ONE from "../assets/ceoone.jpeg";
import MANAGING_DIRECTOR_PHOTO from "../assets/Managing director.jpeg";
import STAFF_PHOTO2 from "../assets/Relation officer.jpeg";

const CEO_PHOTO = CEO_ONE;
const STAFF_PHOTO = MANAGING_DIRECTOR_PHOTO;
const STAFF_PHOTO3 = MANAGING_DIRECTOR_PHOTO;
const STAFF_PHOTO4 = STAFF_PHOTO2;

export const CEO = {
  name: "[CEO Name]",
  role: "Chief Executive Officer",
  bio: "Leads Flawless Consulting Firm Ltd's mission to deliver flawless British-English communication training across Africa.",
  photo: CEO_PHOTO,
};

// Add or remove staff members here — each just needs a name, role, and
// photo. Duplicate one of these objects for every real team member.
export const STAFF = [
  { name: "Miss Immaculatta Amadi", role: "Managing Director", photo: STAFF_PHOTO },
  { name: "Miss Juliet Ogbemudia", role: "PA/Customer Relations Officer.", photo: STAFF_PHOTO2 },
  { name: "[Staff Name]", role: "[Role]", photo: STAFF_PHOTO3 },
  { name: "[Staff Name]", role: "[Role]", photo: STAFF_PHOTO4 },
];

// Five slots for staff group photos (use absolute paths pointing into /src/assets)
import GP1 from "../assets/grouppicture.jpeg";
import GP2 from "../assets/grouppictures2.jpeg";
import GP5 from "../assets/grouppictures5.jpeg";
import GP6 from "../assets/grouppictures6.jpeg";
import GP3 from "../assets/grouppictures3.jpeg";

export const STAFF_GROUP_PHOTOS = [GP1, GP2, GP5, GP6, GP3];