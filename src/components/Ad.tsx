import Container from './Container';

const Ad = () => {
  return (
    <Container className="max-w-[250px] cursor-pointer">
      <header className="flex justify-between items-center gap-2">
        <h3 className="text-md text-slate-500 dark:text-neutral-300">
          Sponsored by
        </h3>
        <span className="text-xs dark:text-neutral-400 dark:text-opacity-60 text-slate-300">
          Create Ad
        </span>
      </header>
      <div className="flex gap-1 flex-col">
        <img
          className="rounded-md"
          src="https://imgs.search.brave.com/v5g1qWSLckjIXSrIkg629LH4uVgpO4Cpw0NovSQ5x5c/rs:fit:1024:683:1/g:ce/aHR0cHM6Ly93d3cu/cmluZ215c3R5bGlz/dC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMTAvUHJv/ZmVzc2lvbmFsLW1h/a2V1cC1hcnRpc3Qt/d29ya2luZy1kb25l/LnBuZw"
        />
        <div>
          <h3 className="text-sm dark:text-neutral-300 text-slate-600">
            Pana Fashion
          </h3>
          <p className="text-xs text-slate-400 dark:text-neutral-500">
            Get the latest trend with our makeup. Click to access our platform
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Ad;
