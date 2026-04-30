import shape3 from "/src/assets/images/shape3-lines.png";
import SkillRight from "./SkillRight"

function Skills() {
  return (
    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="skills position-relative">
              <span class="title fs-3 fw-bold">My Skills</span>
              <h3 class="display-2 fw-bold">Growing Over Times</h3>
              <div
                class="position-absolute shape-line animate__animated animate__bounce animate__infinite	infinite animate__slower	3s">
                <img src={shape3} alt="Shape Line" />
              </div>
              <p class="text-secondary fs-5">
                Crafting seamless digital experiences through code and design.
              </p>
            </div>
          </div>
          <SkillRight/>
        </div>
      </div>
    </section>
  );
}

export default Skills;