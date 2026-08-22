// Two categories, matching the two kinds of photos coming: the CEO
// teaching students, and competitions Flawless attended or organised.
// Add more entries to either `photos` array as more pictures arrive —
// each just needs a caption and an image URL.

// Use absolute dev-server paths to ensure the images are served correctly
const TEACHING_PHOTO_1 = "/src/assets/ceoteachingstudent.jpeg";
const TEACHING_PHOTO_2 = "/src/assets/ceoteaching.jpeg";
const TEACHING_PHOTO_3 = "/src/assets/teaching.jpeg";

const COMPETITION_PHOTO_1 = "/src/assets/groupbooks.jpeg";
const COMPETITION_PHOTO_2 = "/src/assets/competition.jpeg";
const COMPETITION_PHOTO_3 = "/src/assets/group of book.jpeg";

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