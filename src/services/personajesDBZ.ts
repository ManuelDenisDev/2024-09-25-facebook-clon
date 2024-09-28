import {
  type APIDragonBallResponse,
  type Item,
} from "../types/APIDragonBallPersonajesResponse";

const baseURL = "https://dragonball-api.com/api/characters";

export const getPersonajesDBZ = async () => {
  try {
    const res = await fetch(`${baseURL}?limit=58`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { items: personajes } = (await res.json()) as APIDragonBallResponse;

    return personajes;
  } catch (error) {
    console.error(error);
  }
};

export const getPersonajesDBZById = async ({ id }: { id: string }) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const personaje = (await res.json()) as Item as Item;

    return personaje;
  } catch (error) {
    console.error(error);
  }
};
