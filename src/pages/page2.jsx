import Marquee from 'react-fast-marquee';
export default function Page2() {
  return (
    <div className="page2">
      <div className="page2heading">
        We empower thousands of students to achieve academic excellence and
        unlock their full potential.
      </div>
      <div className="marquee">
        <Marquee autoFill={true}>
          <img src="/student1.jpg" alt="Student1" className="image1" />
          <img src="/student2.jpg" alt="Student1" className="image1" />
          <img src="/student3.jpg" alt="Student1" className="image1" />
        </Marquee>
      </div>
    </div>
  );
}
