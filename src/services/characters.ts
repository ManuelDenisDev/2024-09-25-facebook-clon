import {
  type APIDragonBallResponse,
  type Item,
} from "@types/APIDragonBallPersonajesResponse";

const baseURL = "https://dragonball-api.com/api/characters";

export const getPersonajesDBZ = async () => {
  try {
    const res = await fetch(`${baseURL}?limit=58`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { items: personajes } = (await res.json()) as APIDragonBallResponse;
    console.log(personajes);
    
    return personajes;
  } catch (error) {
    console.error(error);
  }
};

export const getPersonajesDBZById = async ({ id }: { id: string }) => {
  const res = await fetch("https://dragonball-api.com/api/characters/${id}");
  console.log(res);

  const personaje = (await res.json()) as Item;

  return personaje;
};
