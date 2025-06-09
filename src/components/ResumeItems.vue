<script setup lang="ts">
import ResumeItem from './ResumeItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import ItemPill from './ItemPill.vue'
import { Category } from '@/types'
</script>

<template>
  <div>
    <ol class="relative my-4 border-gray-200 ms-4 me-4 border-s dark:border-gray-700">
      <ResumeItem>
        <!-- Begin: Work Experience -->
        <template #icon>
          <FontAwesomeIcon :icon="faBriefcase" />
        </template>

        <template #heading>
          Senior Software Engineer (Full Stack)
        </template>
        <template #period>2024-2025</template>
        <template #sub-heading>Jobscan</template>
        <template #location>Seattle, WA (Remote)</template>

        <template #technologies>
          <ItemPill :category="Category.Frameworks">Vue.js</ItemPill>
          <ItemPill :category="Category.Programming">TypeScript</ItemPill>
          <ItemPill :category="Category.Programming">TailwindCSS</ItemPill>
          <ItemPill :category="Category.Programming">PHP</ItemPill>
          <ItemPill :category="Category.Frameworks">Laravel</ItemPill>
          <ItemPill :category="Category.Programming">SQL</ItemPill>
          <ItemPill :category="Category.Programming">Bash</ItemPill>
          <ItemPill :category="Category.Frameworks">Pinia</ItemPill>
          <ItemPill :category="Category.Tool">Vitest</ItemPill>
          <ItemPill :category="Category.Tool">Docker</ItemPill>
          <ItemPill :category="Category.Tool">Vite</ItemPill>
          <ItemPill :category="Category.Tool">MySQL</ItemPill>
          <ItemPill :category="Category.Tool">Git</ItemPill>
        </template>

        <ul class="space-y-2 list-disc">
          <li>
            Collaborating with Product Managers and Designers to developed new features for <a href="https://jobscan.co" target="_blank">Jobscan</a>,
            an AI-powered platform serving thousands of users daily.
          </li>
        </ul>
      </ResumeItem>

      <ResumeItem>
        <!-- Begin: Work Experience -->
        <template #icon>
          <FontAwesomeIcon :icon="faBriefcase" />
        </template>

        <template #heading>
          Senior Full Stack Software Engineer (2022-2024)
          <br />
          Full Stack Software Engineer (2018-2022)
        </template>
        <template #period>2018-2024</template>
        <template #sub-heading>Queen's University</template>
        <template #location>Kingston, Ontario (Remote)</template>

        <template #technologies>
          <ItemPill :category="Category.Programming">PHP</ItemPill>
          <ItemPill :category="Category.Programming">JavaScript</ItemPill>
          <ItemPill :category="Category.Programming">TypeScript</ItemPill>
          <ItemPill :category="Category.Programming">SQL</ItemPill>
          <ItemPill :category="Category.Programming">Bash</ItemPill>
          <ItemPill :category="Category.Frameworks">Laravel</ItemPill>
          <ItemPill :category="Category.Frameworks">Vue.js</ItemPill>
          <ItemPill :category="Category.Frameworks">VueX/Pinia</ItemPill>
          <ItemPill :category="Category.Frameworks">GraphQL</ItemPill>
          <ItemPill :category="Category.Tool">Docker</ItemPill>
          <ItemPill :category="Category.Tool">Vite</ItemPill>
          <ItemPill :category="Category.Tool">MySQL/MariaDB</ItemPill>
          <ItemPill :category="Category.Tool">Git</ItemPill>
          <ItemPill :category="Category.Tool">Postman</ItemPill>
        </template>

        <ul class="space-y-2 list-disc">
          <li>
            Developed new modules for <a href="https://elentra.org" target="_blank">elentra.org</a>,
            a medical education platform maintained by an international consortium of medical
            schools.
          </li>
          <li>
            Ensured code quality through code reviews and collaboration in an Agile (Scrum)
            environment.
          </li>
          <li>Contributed to the Elentra Platform's architecture committee.</li>
        </ul>
      </ResumeItem>

      <ResumeItem>
        <template #icon>
          <FontAwesomeIcon :icon="faBriefcase" />
        </template>

        <template #heading>Full Stack Software Engineer</template>
        <template #sub-heading>
          Fiotec (Foundation for Scientific and Technological Development in Health)
        </template>
        <template #period>2018-2018</template>
        <template #location>Rio de Janeiro, Brazil (Remote)</template>

        <template #technologies>
          <ItemPill :category="Category.Programming">Python</ItemPill>
          <ItemPill :category="Category.Programming">JavaScript</ItemPill>
          <ItemPill :category="Category.Programming">SQL</ItemPill>
          <ItemPill :category="Category.Programming">Bash</ItemPill>
          <ItemPill :category="Category.Frameworks">Django</ItemPill>
          <ItemPill :category="Category.Tool">Git</ItemPill>
          <ItemPill :category="Category.Tool">PostgreSQL</ItemPill>
        </template>

        <ul class="space-y-2 list-disc">
          <li>
            Built a web platform for managing healthcare professional courses and implemented data
            pipelines and visualizations using Power BI.
          </li>
        </ul>
      </ResumeItem>
      <!-- End: Work Experience -->

      <!-- Begin: Education -->
      <ResumeItem>
        <template #icon>
          <FontAwesomeIcon :icon="faGraduationCap" />
        </template>

        <template #period>Class of 2017</template>
        <template #location>Natal, Brazil</template>
        <template #heading>
          Bachelor of Technology in System Analysis and Software Development
        </template>
        <template #sub-heading>
          Federal Institute of Technology of Rio Grande do Norte (IFRN)
        </template>

        <ul class="space-y-2 list-disc">
          <li>With an academic exchange period at Langara College, Vancouver, BC (2013-2015).</li>
        </ul>
      </ResumeItem>
      <!-- End: Education -->
    </ol>
  </div>
</template>
