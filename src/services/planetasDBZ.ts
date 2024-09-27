import {
  type APIDragonBallPlanetasResponse,
  type Item,
} from "@types/APIDragonBallPlanetasResponse";

const baseURL = "https://dragonball-api.com/api/planets";

export const getPlanetasDBZ = async () => {
  try {
    const res = await fetch(`${baseURL}?limit=20`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { items: planetas } =
      (await res.json()) as APIDragonBallPlanetasResponse;

    return planetas;
  } catch (error) {
    console.error(error);
  }
};

export const getPlanetasDBZById = async ({ id }: { id: string }) => {
  try {
    const res = await fetch(`${baseURL}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const planeta = (await res.json()) as Item;

    return planeta;
  } catch (error) {
    console.error(error);
  }
};
