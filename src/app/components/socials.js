import Image from "next/image";

export default function Socials() {
  return (
    <div className="grid grid-cols-5 mt-16 gap-8 bg-[#4449] place-items-center rounded-xl p-6 m-auto sm:w-max w-full">
      <a href="https://twitter.com/rustyoperations" target="_blank">
        <Image
          src="/img/socials/twitter.png"
          width={48}
          height={48}
          alt="Twitter"
          className="filter invert"
        />
      </a>
      <a href="https://www.facebook.com/RustyOperations" target="_blank">
        <Image
          src="/img/socials/facebook.png"
          width={48}
          height={48}
          alt="Facebook"
          className="filter invert"
        />
      </a>
      <a href="https://www.instagram.com/rusty_operations/" target="_blank">
        <Image
          src="/img/socials/instagram.png"
          width={48}
          height={48}
          alt="Instagram"
          className="filter invert"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCm-FUo4TagET2kA-JpVpwWw"
        target="_blank"
      >
        <Image
          src="/img/socials/youtube.png"
          width={48}
          height={48}
          alt="Youtube"
          className="filter invert"
        />
      </a>
      <a
        href="https://steamcommunity.com/groups/rusty-operations"
        target="_blank"
      >
        <Image
          src="/img/socials/steam.png"
          width={48}
          height={48}
          alt="Steam"
          className="filter invert"
        />
      </a>
    </div>
  );
}
