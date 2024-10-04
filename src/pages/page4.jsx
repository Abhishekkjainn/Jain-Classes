import Marquee from 'react-fast-marquee';

export default function Page4() {
  const testimonials = [
    {
      name: 'Aarav Mehta',
      text: "Shailee's Jain Classes transformed my approach to learning. The teachers are incredibly supportive!",
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Nisha Patel',
      text: 'The personalized attention my child received helped him excel in math. Highly recommend!',
      designation: 'Parent',
      image: '/student1.jpg',
    },
    {
      name: 'Rahul Sharma',
      text: "The interactive sessions made studying enjoyable. I can't believe how much I've improved!",
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Simran Khanna',
      text: 'I was struggling with science, but the tutors here made it so much easier to understand.',
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Vikram Joshi',
      text: "Shailee's Jain Classes have the best teachers! They genuinely care about each student's success.",
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Rita Bansal',
      text: "My daughter loves going to classes here. She's more confident and performs better at school.",
      designation: 'Parent',
      image: '/student1.jpg',
    },
    {
      name: 'Karan Iyer',
      text: "The study materials are well-structured and really helpful. I've seen a significant improvement.",
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Meera Desai',
      text: 'I appreciate the flexible timings that accommodate our busy schedule. Great support!',
      designation: 'Parent',
      image: '/student1.jpg',
    },
    {
      name: 'Ansh Gupta',
      text: "Shailee's Jain Classes make learning fun! I look forward to every session.",
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Priya Choudhary',
      text: 'The dedication of the staff is commendable. They go above and beyond for their students.',
      designation: 'Parent',
      image: '/student1.jpg',
    },
    {
      name: 'Arjun Verma',
      text: 'I’ve never enjoyed studying until I joined these classes. The environment is so positive!',
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Tanvi Rao',
      text: 'The one-on-one attention helped my son with his exam preparation immensely.',
      designation: 'Parent',
      image: '/student1.jpg',
    },
    {
      name: 'Rohan Sethi',
      text: 'The online resources and additional practice materials are a huge plus. Very helpful!',
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Sakshi Kapoor',
      text: "I can't thank the teachers enough for their patience and guidance. I've gained so much confidence!",
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Nitin Agarwal',
      text: 'My grades improved drastically within a few months. The support is unmatched!',
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Pooja Malhotra',
      text: "Shailee's Jain Classes are a blessing! My daughter enjoys learning now and has made great friends.",
      designation: 'Parent',
      image: '/student1.jpg',
    },
    {
      name: 'Devendra Singh',
      text: 'The classes are well-organized, and the tutors know how to keep students engaged.',
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Ananya Soni',
      text: 'This is the best decision I made for my education. The team genuinely cares about us.',
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Kartik Jain',
      text: 'The teachers are always available to help, even outside class hours. Truly dedicated!',
      designation: 'Student',
      image: '/student1.jpg',
    },
    {
      name: 'Sneha Reddy',
      text: "My son’s confidence has soared since joining Shailee's Jain Classes. We couldn't be happier!",
      designation: 'Parent',
      image: '/student1.jpg',
    },
  ];

  //   const vibrantColors = [
  //     '#D50032', // Crimson Red
  //     '#8E24AA', // Amethyst
  //     '#5E35B1', // Purple
  //     '#3F51B5', // Indigo
  //     '#1976D2', // Blue
  //     '#0097A7', // Teal
  //     '#00796B', // Dark Teal
  //     '#388E3C', // Green
  //     '#689F38', // Olive Green
  //     '#FBC02D', // Gold
  //     '#F57F20', // Orange
  //     '#EF6C00', // Dark Orange
  //     '#D84315', // Burnt Orange
  //     '#C2185B', // Dark Pink
  //     '#F50057', // Fuchsia
  //     '#A52431', // Dark Red
  //     '#8D6E63', // Brown
  //     '#A1887F', // Light Brown
  //     '#FFC107', // Amber
  //     '#FF5722', // Deep Orange
  //     '#FF4081', // Hot Pink
  //   ];
  const vibrantColors = [
    '#0D47A1', // Dark Blue
    '#1E88E5', // Bright Blue
    '#1976D2', // Medium Blue
    '#1565C0', // Strong Blue
    '#0D93D3', // Cyan Blue
    '#0A74D1', // Deep Sky Blue
    '#004BA0', // Royal Blue
    '#003F87', // Dark Royal Blue
    '#003DA5', // Darker Blue
    '#005A7F', // Deep Sea Blue
    '#003366', // Midnight Blue
    '#002A5C', // Navy Blue
    '#004E80', // Deep Teal Blue
    '#004B87', // Ocean Blue
    '#005E99', // Steel Blue
    '#004F6D', // Dark Slate Blue
    '#005B8C', // Blue Green
    '#006A93', // Dark Sky Blue
    '#004B87', // Twilight Blue
    '#002F4C', // Dark Cerulean
  ];

  return (
    <div className="page4">
      <div className="headingpage4">Hear What they Say About Us.</div>

      <Marquee autoFill={true} pauseOnHover={true} pauseOnClick={true}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonialcard"
            style={{
              backgroundColor: vibrantColors[index % vibrantColors.length],
            }}
          >
            <div className="profile">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonialcardimage"
              />
              <div className="namedesig">
                <div>{testimonial.name}</div>
                <div className="designation">{testimonial.designation}</div>
              </div>
            </div>
            <div className="testimonialtext">{testimonial.text}</div>
          </div>
        ))}
      </Marquee>

      <Marquee
        autoFill={true}
        pauseOnHover={true}
        pauseOnClick={true}
        direction="right"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonialcard"
            style={{
              backgroundColor: vibrantColors[index % vibrantColors.length],
            }}
          >
            <div className="profile">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonialcardimage"
              />
              <div className="namedesig">
                <div>{testimonial.name}</div>
                <div className="designation">{testimonial.designation}</div>
              </div>
            </div>
            <div className="testimonialtext">{testimonial.text}</div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
