// Two categories, matching the two kinds of photos coming: the CEO
// teaching students, and competitions Flawless attended or organised.
// Add more entries to either `photos` array as more pictures arrive —
// each just needs a caption and an image URL.

import TEACHING_PHOTO_1 from "../assets/ceoteachingstudent.jpeg";
import TEACHING_PHOTO_2 from "../assets/ceoteaching.jpeg";
import TEACHING_PHOTO_3 from "../assets/teaching.jpeg";

import COMPETITION_PHOTO_1 from "../assets/groupbooks.jpeg";
import COMPETITION_PHOTO_2 from "../assets/competition.jpeg";
import COMPETITION_PHOTO_3 from "../assets/groupofbook.jpeg";

export const EVENT_CATEGORIES = [
  {
    id: "teaching",
    title: "Teaching Sessions",
    ipa: "/ˈtiːtʃɪŋ ˈsɛʃənz/",
    description:
      "The CEO leading phonics, diction, and elocution sessions for groups of students.",
    photos: [
      { caption: "CEO Teaching — Classroom", image: TEACHING_PHOTO_1 },
      { caption: "CEO Teaching — Workshop", image: TEACHING_PHOTO_2 },
      { caption: "CEO Portrait", image: TEACHING_PHOTO_3 },
    ],
  },
  {
    id: "competitions",
    title: "Competitions",
    ipa: "/ˌkɒmpəˈtɪʃənz/",
    description:
      "Literacy and elocution competitions Flawless has attended or organised for students.",
    photos: [
      { caption: "Flawless Read Pro Bee Competition", image: COMPETITION_PHOTO_1 },
      { caption: "Competition — Stage", image: COMPETITION_PHOTO_2 },
      { caption: "Competition — Group", image: COMPETITION_PHOTO_3 },
    ],
  },
];