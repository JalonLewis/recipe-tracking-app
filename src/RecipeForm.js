import React, { useState } from "react";

function RecipeForm({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({...formData});
    setFormData({ ...initialFormState });
  };
  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                required={true}
                onChange={handleChange}
                placeholder="Name"
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                required={true}
                onChange={handleChange}
                placeholder="Cuisine"
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                required={true}
                onChange={handleChange}
                placeholder="URL"
                value={formData.photo}
              />
            </td>
            <td className="content_td">
              <textarea
                id="ingredients"
                type="content"
                name="ingredients"
                required={true}
                onChange={handleChange}
                placeholder="Ingredients"
                value={formData.ingredients}
              />
            </td>
            <td className="content_td">
              <textarea
                id="preparation"
                type="content"
                name="preparation"
                required={true}
                onChange={handleChange}
                placeholder="Preparation"
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeForm;
