import ClientComponents from "./client-component.js";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;
  return {
    title: `Viewing article ${id}`,
  };
}

export default function Page() {
  return <ClientComponents />;
}
