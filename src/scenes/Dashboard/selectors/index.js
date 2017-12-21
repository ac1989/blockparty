export const getVisibleTasks = (tasks, { filterBy, filterText, filterId }) => {
  if (!filterBy) {
    return tasks;
  }
  if (filterBy === 'text') {
    return tasks.filter(task => {
      return (
        task.title.toLowerCase().includes(filterText.toLowerCase()) ||
        task.description.toLowerCase().includes(filterText.toLowerCase())
      );
    });
  }
  if (filterBy === 'parentId') {
    return tasks.filter(task => {
      return task.parent === filterId;
    });
  }
};

export const getVisibleMissions = (missions, filter) => {
  if (filter.filterBy === 'text') {
    return missions.filter(mission => {
      return (
        mission.title.toLowerCase().includes(filter.filterText.toLowerCase()) ||
        mission.description
          .toLowerCase()
          .includes(filter.filterText.toLowerCase())
      );
    });
  }
  if (filter.filterBy === 'parentId') {
    return missions.filter(mission => {
      return mission.parent === filter.filterId;
    });
  }
  return missions;
};

export const getVisibleProjects = (projects, filter) => {
  if (!filter.filterBy) {
    return projects;
  }
  if (filter.filterBy === 'text') {
    return projects.filter(project => {
      return (
        project.title.toLowerCase().includes(filter.filterText.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(filter.filterText.toLowerCase())
      );
    });
  }
  return projects;
};

export const getSubTasks = (tasks, id) => {
  return tasks.filter(task => task.parent === id);
};

export const getSubMissions = (missions, id) => {
  return missions.filter(mission => mission.parent === id);
};
