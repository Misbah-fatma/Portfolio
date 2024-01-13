/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Badlav Seva Samiti',
    position: 'Web Developer',
    url: 'https://smileidentity.com',
    startDate: '2023-12-01',
    summary: `As a Web Developer Intern, I actively contributed to the creation of innovative web solutions, gaining hands-on experience in
     coding, debugging, and collaborating with cross-functional teams. Successfully applied and expanded my knowledge of HTML, CSS, and
      JavaScript, while working on real-world projects. Proactively tackled challenges, demonstrating a strong commitment to continuous 
      learning and a passion for creating seamless online experiences`,
    highlights: [
      'Collaborated with a dynamic team of developers to contribute to the design, development, and maintenance of responsive and visually appealing websites. Utilized HTML, CSS, and JavaScript to implement innovative features and enhance user interfaces. ',
      'Engaged in problem-solving and debugging activities, fostering a deep understanding of web development principles.',
      'Actively participated in agile development processes, ensuring timely project delivery. ',
      'Demonstrated commitment to continuous learning and staying abreast of industry trends for optimal skill enhancement.',
    ],
  },
 
];

export default work;
