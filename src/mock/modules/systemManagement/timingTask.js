export default {
  timingTaskList: config => {
    return {
      'code': 200,
      'msg': '查询定时任务列表成功',
      'data': {
        'total': 12,
        'size': 10,
        'current': 1,
        'records': [
          {
            'jobName': 'asyncUser', // 任务名称
            'jobDescription': '同步用户数据', // 任务描述
            'jobClassName': 'com.dljl.transport.task.TransportJob', // 任务执行job类
            'jobGroupName': 'SmVoeI', // 任务组名称（新增定时任务时产生的随机数）
            'cronExpression': '0 30 12 1/1 * ? ', // cron表达式
            'cronDescription': '每天12点30分执行', // 表达式描述
            'timeZoneId': 'Asia/Shanghai', // 时区（不用渲染）
            'state': '0', // 状态 0 启动中 1 暂停
            'prevFireTime': null, // 上次执行时间
            'nextFireTime': '2019-08-30 12:30:00'// 下次执行时间
          },
          {
            'jobName': 'asyncRole', // 任务名称
            'jobDescription': '同步角色数据', // 任务描述
            'jobClassName': 'com.dljl.transport.task.TransportJob', // 任务执行job类
            'jobGroupName': 'm6NaWn', // 任务组名称（新增定时任务时产生的随机数）
            'cronExpression': '0 0 15 22 1/1 ? ', // cron表达式
            'cronDescription': '每月22日12点30分执行一次', // 表达式描述
            'timeZoneId': 'Asia/Shanghai', // 时区（不用渲染）
            'state': '1', // 状态 0 启动中 1 暂停
            'prevFireTime': null, // 上次执行时间
            'nextFireTime': '2019-11-22 12:30:00'// 下次执行时间
          },
          {
            'jobName': 'asyncBase', // 任务名称
            'jobDescription': '基本数据同步', // 任务描述
            'jobClassName': 'com.dljl.transport.task.TransportJob', // 任务执行job类
            'jobGroupName': 'SrLHHP', // 任务组名称（新增定时任务时产生的随机数）
            'cronExpression': '0 0 0,18 1/1 * ? ', // cron表达式
            'cronDescription': '每天18点执行', // 表达式描述
            'timeZoneId': 'Asia/Shanghai', // 时区（不用渲染）
            'state': '0', // 状态 0 启动中 1 暂停
            'prevFireTime': null, // 上次执行时间
            'nextFireTime': '2019-11-25 18:00:00'// 下次执行时间
          }
        ]
      }
    }
  },
  add: config => {
    return {
      'msg': '定时任务添加成功',
      'code': 200
    }
  },
  delete: config => {
    return {
      'msg': '定时任务删除成功',
      'code': 200
    }
  },
  update: config => {
    return {
      'msg': '定时任务更新成功',
      'code': 200
    }
  },
  start: config => {
    return {
      'msg': '定时任务已启动',
      'code': 200
    }
  },
  pause: config => {
    return {
      'msg': '定时任务已暂停',
      'code': 200
    }
  }
}
