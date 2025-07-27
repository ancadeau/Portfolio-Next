import { personalDataFr } from './personal-data-fr';
import { personalDataEn } from './personal-data-en';
import { experiencesFr } from './experience-fr';
import { experiencesEn } from './experience-en';
import { educationsFr } from './educations-fr';
import { educationsEn } from './educations-en';
import { projectsDataFr } from './projects-data-fr';
import { projectsDataEn } from './projects-data-en';

export const getPersonalData = (language = 'fr') => {
  return language === 'en' ? personalDataEn : personalDataFr;
};

export const getExperiences = (language = 'fr') => {
  return language === 'en' ? experiencesEn : experiencesFr;
};

export const getEducations = (language = 'fr') => {
  return language === 'en' ? educationsEn : educationsFr;
};

export const getProjectsData = (language = 'fr') => {
  return language === 'en' ? projectsDataEn : projectsDataFr;
}; 