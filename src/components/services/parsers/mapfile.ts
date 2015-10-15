/// <reference path='../../interface/teambition.d.ts' />
module teambition {
  'use strict';
  function mapfile(type: string): string {
    const iconsMap = {
      set_note: 'icon-book',
      set_executor: 'icon-user',
      set_content: 'icon-pencil',
      set_title: 'icon-pencil',
      set_pin: 'icon-pin',
      set_attachments: 'icon-paperclip-horizontal',
      set_done: 'icon-tick',
      set_priority: 'icon-circle',
      set_duedate: 'icon-calendar2',
      involve: 'icon-add-user',
      create: 'icon-plus',
      archive: 'icon-archive',
      unarchive: 'icon-unarchive',
      update: 'icon-pencil',
      set_filename: 'icon-pencil',
      set_collection: 'icon-file',
      set_version: 'icon-file',
      set_tasklist: 'icon-th-list',
      set_stage: 'icon-stage',
      set_redo: 'icon-checkbox',
      comment: ' ',
      remove_task_subtask: 'icon-sub-task',
      add_task_subtasks: 'icon-sub-task',
      update_recurrence : 'icon-repeat',
      transform_task_subtask: 'icon-convert',
      update_task_subtask_status: 'icon-sub-task',
      update_task_subtask_content: 'icon-sub-task',
      update_task_subtask_executor: 'icon-user',
      update_entry: 'icon-bookkeeping',
      update_task: 'icon-pencil',
      linked: 'icon-link2',
      add_member: 'icon-add-user',
      remove_member: 'icon-user2-bold',
      setrole_member: 'icon-user2-bold',
      change_event: 'icon-pencil',
      'create_task': 'icon-checkbox-thin',
      task: 'icon-checkbox-thin',
      'create_post': 'icon-wall',
      post: 'icon-wall',
      'create_event': 'icon-td-calendar-blank',
      event: 'icon-td-calendar-blank',
      'create_entry': 'icon-bookkeeping',
      entry: 'icon-bookkeeping',
      'finish_task': 'icon-checkbox-ios-checked',
      system: 'icon-sys-info',
      'create_work': ' ',
      'redo_task': 'icon-checkbox-checked'
    };
    let icon = iconsMap[type] || 'icon-pencil';
    return icon;
  }

  angular.module('teambition').factory('mapfile', function() {
    return mapfile;
  });
}