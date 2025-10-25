import Image from "next/image";

import Rocketseat from "../assets/rocketseat.svg";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header className="flex items-center justify-between max-w-[1064px] w-full mx-auto py-6 px-5">
        <Image alt="Rocketseat" src={Rocketseat} width={848 / 5} />

        <nav>
          <Link
            aria-label="Github"
            href="https://github.com/Alison-Gabriel"
            className="text-brand-primary"
          >
            <svg
              aria-hidden="true"
              height="28"
              viewBox="0 -3.1 2490.3 2493"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="1245.2"
                cy="1243.4"
                fill="transparent"
                rx="1217.6"
                ry="1246.5"
              />
              <path
                d="m1245.2 1.6c-687.6 0-1245.2 557.4-1245.2 1245.1 0 550.2 356.8 1016.9 851.5 1181.5 62.2 11.5 85.1-27 85.1-59.9 0-29.7-1.2-127.8-1.7-231.8-346.4 75.3-419.5-146.9-419.5-146.9-56.6-143.9-138.3-182.2-138.3-182.2-113-77.3 8.5-75.7 8.5-75.7 125 8.8 190.9 128.3 190.9 128.3 111.1 190.4 291.3 135.3 362.3 103.5 11.2-80.5 43.4-135.4 79.1-166.5-276.6-31.5-567.3-138.3-567.3-615.4 0-135.9 48.6-247 128.3-334.2-12.9-31.3-55.5-157.9 12.1-329.4 0 0 104.6-33.5 342.5 127.6 99.3-27.6 205.8-41.4 311.7-41.9 105.8.5 212.4 14.3 311.9 41.9 237.7-161.1 342.1-127.6 342.1-127.6 67.8 171.5 25.1 298.2 12.2 329.5 79.8 87.2 128.1 198.3 128.1 334.2 0 478.2-291.3 583.6-568.6 614.4 44.7 38.6 84.5 114.4 84.5 230.6 0 166.6-1.4 300.7-1.4 341.7 0 33.1 22.4 72 85.5 59.7 494.5-164.8 850.8-631.4 850.8-1181.4 0-687.7-557.5-1245.1-1245.1-1245.1"
                fill="currentColor"
              />
            </svg>
          </Link>
        </nav>
      </header>

      <main className="max-w-[808px] w-full mx-auto py-6 px-5">
        <article>
          <header>
            <h2 className="mb-5 text-2xl font-bold">
              Desenvolvendo uma web acessivel
            </h2>
            <h4 className="text-lg font-bold">
              Protocolos e diretrizes orientam o desenvolvimento de tecnologias
              acessiveis, mas e preciso olhar para alem de tudo isso
            </h4>
          </header>

          <p className="my-5">
            Acessibilidade se tornou uma tendencia no ecossistema tecnologico
            mundial, diversas empresas passaram a adotar criterios de
            desenvolvimento acessivel em seus projetos - por uma questao pratica
            ou por exigencias legais -, no entanto, ainda faltam recursos e
            consciencia do que de fato e inclusivo na internet para pessoas com
            deficiencia.
          </p>
          <p className="my-5">
            Para abordar esse tema, e preciso ter uma perspectiva cultural sobre
            o assunto, nao encara-lo apenas na otica tecnica ou pratica.
            Acessibilidade passou a ser vista como um desafio (ou tendencia)
            para o ecossistema tech e nao como filosofia natural daquilo que
            condiz com os principios basicos da web: acessivel para humanos. Tal
            afirmacao esta na W3C.
          </p>

          <h3 className="text-xl font-bold">O que e acessibilidade, afinal?</h3>
        </article>
      </main>

      <footer className="flex items-center justify-between max-w-[1064px] w-full mx-auto py-6 px-5">
        <Image alt="Rocketseat" src={Rocketseat} width={848 / 6} />

        <nav
          aria-label="Rodape"
          className="flex flex-col gap-3 items-end text-zinc-300 text-sm"
        >
          <Link
            aria-label="Termos de uso"
            href="/"
            className="bg-brand-shape rounded-md px-4 py-2 hover:opacity-80 transition-all"
          >
            Termos de uso
          </Link>
          <Link
            aria-label="Contato"
            href="/"
            className="bg-brand-shape rounded-md px-4 py-2 hover:opacity-80 transition-all"
          >
            Entre em contato
          </Link>
          <Link
            aria-label="Sobre"
            href="/"
            className="bg-brand-shape rounded-md px-4 py-2 hover:opacity-80 transition-all"
          >
            Sobre nos
          </Link>
        </nav>
      </footer>
    </>
  );
}
