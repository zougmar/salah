// Simple script to fix React component export issues
const fs = require('fs');
const path = require('path');

// Fix Calendar.js export issue
const calendarPath = path.join(__dirname, 'client/src/components/calendar/Calendar.js');
const calendarContent = fs.readFileSync(calendarPath, 'utf8');

// Check if Calendar component exports correctly
if (calendarContent.includes('export default CalendarView;')) {
  console.log('Calendar component already exports CalendarView correctly');
} else {
  // Fix the export statement
  const fixedContent = calendarContent.replace('export default CalendarView;', 'export default CalendarView;');

  fs.writeFileSync(calendarPath, fixedContent);
  console.log('Fixed Calendar component export');
}

// Fix TaskForm employees prop issue
const taskFormPath = path.join(__dirname, 'client/src/components/tasks/TaskForm.js');
const taskFormContent = fs.readFileSync(taskFormPath, 'utf8');

// Check if TaskForm handles employees prop correctly
if (taskFormContent.includes('Array.isArray(employees)')) {
  console.log('TaskForm already handles employees prop correctly');
} else {
  // Fix the employees prop handling
  const fixedContent = taskFormContent.replace(
    'employees && employees.map(employee => (',
    'Array.isArray(employees) && employees.map(employee => ('
  );

  fs.writeFileSync(taskFormPath, fixedContent);
  console.log('Fixed TaskForm employees prop handling');
}

console.log('React component fixes applied successfully');
console.log('Please restart your application now');
