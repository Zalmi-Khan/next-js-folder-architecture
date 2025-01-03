export const MainFooter = () => {
  return (
    <footer className="bg-secondary shadow py-10">
      <section className="container mx-auto  text-white grid grid-cols-4 gap-20">
        <div className="col-span-2 flex flex-col gap-2">
          <h1 className=" font-bold text-4xl">NextJS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt
            repellendus labore hic omnis culpa! Sint porro eligendi et quibusdam
            ea, dolor hic a recusandae repellendus illo minima iste fuga esse
            perferendis veritatis quod dolore voluptatum. Enim, deserunt nisi,
            beatae recusandae aspernatur itaque veniam vel excepturi impedit
            voluptatem asperiores autem!
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-semibold text-xl">Quick Links</h6>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-semibold text-xl">Connect with us</h6>
          <ul className="flex flex-col gap-2">
            <li>Email Here</li>
            <li>Address Here</li>
            <li>Phone Here</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
