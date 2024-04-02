<script setup lang="ts">
import ResumeItem from './ResumeItem.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import ItemPill from './ItemPill.vue'
import { Category } from '@/types'
</script>

<template>
  <div class="lg:h-full lg:max-h-screen lg:overflow-y-auto">
    <ol class="relative ms-4 border-s border-gray-200 dark:border-gray-700 my-4">
      <ResumeItem>
        <template #icon>
          <FontAwesomeIcon :icon="faBriefcase" />
        </template>
        <template #heading>
          Senior Full Stack Web Developer (2022-2024)
          <br />
          Full Stack Web Developer (2018-2022)
        </template>
        <template #period>2018-2024</template>
        <template #sub-heading>Queen's University</template>
        <template #location>Kingston, Ontario</template>
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
        <template #heading>Full Stack Web Developer</template>
        <template #sub-heading
          >Fiotec (Foundation for Scientific and Technological Development in Health)</template
        >
        <template #period>2018-2018</template>
        <template #location>Natal, Brazil</template>
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
            Built a web platform for managing Brazilian healthcare professional courses and
            implemented data pipelines & visualizations (using Power BI) for course analysis.
          </li>
        </ul>
      </ResumeItem>
      <ResumeItem>
        <template #icon>
          <FontAwesomeIcon :icon="faBriefcase" />
        </template>
        <template #heading>Full Stack Web Developer Intern</template>
        <template #sub-heading>Laboratory for Technological Innovation in Healthcare</template>
        <template #period>2015-2017</template>
        <template #location>Natal, Brazil</template>
        <template #technologies>
          <ItemPill :category="Category.Programming">PHP</ItemPill>
          <ItemPill :category="Category.Programming">JavaScript</ItemPill>
          <ItemPill :category="Category.Programming">SQL</ItemPill>
          <ItemPill :category="Category.Programming">Bash</ItemPill>
          <ItemPill :category="Category.Frameworks">Laravel</ItemPill>
          <ItemPill :category="Category.Tool">Docker</ItemPill>
          <ItemPill :category="Category.Tool">MySQL</ItemPill>
          <ItemPill :category="Category.Tool">Git</ItemPill>
          <ItemPill :category="Category.Tool">Postman</ItemPill>
          <ItemPill :category="Category.Tool">CI/CD</ItemPill>
        </template>
        <ul class="space-y-2 list-disc">
          <li>
            Designed and built a Laravel platform for MERCOSUR and Brazil's Ministry of Health to
            manage healthcare professional applications for international work.
          </li>
        </ul>
      </ResumeItem>
      <ResumeItem>
        <template #icon>
          <FontAwesomeIcon :icon="faGraduationCap" />
        </template>
        <template #period>Class of 2017</template>
        <template #location>Natal, Brazil</template>
        <template #heading
          >Bachelor of Technology in System Analysis and Software Development</template
        >
        <template #sub-heading
          >Federal Institute of Technology of Rio Grande do Norte (IFRN)</template
        >
        <ul class="space-y-2 list-disc">
          <li>With an academic exchange period at Langara College, Vancouver, BC (2013-2015).</li>
        </ul>
      </ResumeItem>
    </ol>
  </div>
</template>
