import dynamic from "next/dynamic";

const PerfilPage = dynamic(
  () => import("@/features/perfil/PerfilPage").then((m) => m.default),
  { ssr: false },
);

export default function Perfil() {
  return <PerfilPage />;
}
