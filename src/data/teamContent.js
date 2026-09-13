// Placeholder photos are labeled with exactly what they should show, so
// it's obvious which real photo replaces which placeholder. Replace the
// `photo` URLs (and the bracketed names/roles) once real photos and
// details are ready — nothing here is real data yet.

import CEO_ONE from "../assets/ceopicture.jpeg";
import MANAGING_DIRECTOR_PHOTO from "../assets/Managing director.jpeg";
import RELATIONS_OFFICER_PHOTO from "../assets/Relation officer.jpeg";
import FACILITATOR_PHOTO from "../assets/Facilitator.jpeg";
import FACILITATOR1_PHOTO from "../assets/Facilitator1.jpeg";

export const CEO = {
  name: "Rosemary Brown-Amadi",
  role: "Chief Executive Officer",
  bio: "Leads Flawless Consulting Firm Ltd's mission to deliver flawless British-English communication training across Africa.",
  photo: CEO_ONE,
};

// Add or remove staff members here — each just needs a name, role, and
// photo. Duplicate one of these objects for every real team member.
export const STAFF = [
  { name: "Miss Immaculatta Amadi", role: "Managing Director", photo: MANAGING_DIRECTOR_PHOTO },
  {
    name: "Miss Juliet Ogbemudia",
    role: "PA/Customer Relations Officer.",
    photo: RELATIONS_OFFICER_PHOTO,
    // Default center-crop was cutting off too much of the top of her
    // photo. A lower % reveals more of the top of the image — nudge
    // this down/up a bit further if it's still not quite right.
    focalPoint: "center 20%",
  },
  { name: "Catherine Ogbuehi", role: "Facilitator", photo: FACILITATOR_PHOTO },
  { name: "Uche Obioma Uzoetue", role: "Facilitator", photo: FACILITATOR1_PHOTO },
];

// Five slots for staff group photos (use absolute paths pointing into /src/assets)
import GP1 from "../assets/grouppicture.jpeg";
import GP2 from "../assets/grouppictures2.jpeg";
import GP5 from "../assets/grouppictures5.jpeg";
import GP6 from "../assets/grouppictures6.jpeg";
import GP3 from "../assets/grouppictures3.jpeg";

// Each photo can be a plain image, or { src, focalPoint } when the crop
// needs to be anchored somewhere other than dead-center on the wide
// slideshow banner. focalPoint is a CSS object-position value — a lower
// vertical % reveals more of the TOP of the photo (use when a head is
// being cut off at the top), a higher % reveals more of the BOTTOM.
// Nudge the % up or down a bit if a head still isn't fully in frame.
export const STAFF_GROUP_PHOTOS = [
  GP1,
  { src: GP2, focalPoint: "center 15%" },
  { src: GP5, focalPoint: "center 65%" },
  { src: GP6, focalPoint: "center 65%" },
  { src: GP3, focalPoint: "center 15%" },
];