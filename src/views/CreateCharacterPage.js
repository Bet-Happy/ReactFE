import React from "react";

function CreateCharacter() {
    return (
        <>
            <div className="container">
                <form className="m-5">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Character Name</label>
                        <input type="text" className="form-control" id="character_name" aria-describedby="character_name" name="name" />
                        <div id="characterCreationHelp" className="form-text">The one and only....</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Character</button>
                </form>
            </div>
            <div className="container">

            </div>
        </>
    )
}

export default CreateCharacter;