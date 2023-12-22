import TestimonialCart from "./TestimonialCart";

const data = [
  {
    name: "Emma Carter",
    profession: "Developer",
    review:
      "This task manager has revolutionized my workflow. Its intuitive interface and robust features streamline my work. It's become an indispensable tool for managing projects efficiently.",
    image:
      "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
  },
  {
    name: "Oliver Patel",
    profession: "Corporate Professional",
    review:
      "As a corporate professional, this task management platform has elevated my productivity. It seamlessly organizes my tasks and schedules, aiding in efficient time management.",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Ava Chang",
    profession: "Banker",
    review:
      "This task management site caters perfectly to banking professionals like me. Its security measures and task prioritization features have significantly improved my workflow.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
  },
];

const Section = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold leading-tight text-[#1e1b4b] dark:text-slate-200 sm:text-4xl lg:text-[46px]">
            What people are saying
          </h1>
          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter">
                <div className="bg-gradient-to-r from-[#44ff9a] via-[#44b0ff] to-[#8b44ff] via-[#ff6644] to-[#ebff70] h-full w-full"></div>
              </div>
            </div>

            {/*  */}
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {data.map((review, idx) => (
                <TestimonialCart key={idx} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
