import { Task } from '../models/tasks';

/**
 * Manage Tasks for our Express API
 */
export class TaskManager {
    /**
     *Creates an instance of TaskManager.
     * @param {*} req - express request object
     * @param {*} res - express response object
     * @memberof TaskManager
     */
    constructor(req, res) {
            this.req = req;
            this.res = res;
        }
        /**
         *  Find tasks that match the specified options
         *
         * @param {*} options
         * @memberof TaskManager
         */
    find(options = {}) {
            Task.find(options, (error, tasks) => {
                if (error) {
                    this.res.json({
                        error: error.message,
                    });
                } else {
                    this.res.json(tasks);
                }
            });
        }
        /**
         *
         *
         * @param {*} [option={}]
         * @memberof TaskManager
         */
    findById(option = {}) {
        Task.findById(option, (error, tasks) => {
            if (error) {
                let response = error.message;
                if (error.kind === 'ObjectId') {
                    response = 'Invalid Id';
                }
                this.res.json({
                    error: response,
                });
            } else {
                this.res.json(tasks);
            }
        });
    }

    /**
     *
     *
     * @param {*} [id={}]
     * @memberof TaskManager
     */
    deleteTask(id) {
        Task.findByIdAndRemove(id, (error, tasks) => {
            if (!error) {
                this.res.json(tasks);
            } else {
                this.res.json({ error: 'Invalid task ID' });
            }
        });
    }

    /**
     *
     *
     * @param {*} [option={}]
     * @memberof TaskManager
     */
    updateRecords(option = {}) {
        Task.findById(this.req.params.id).exec((error, tasks) => {
            if (error) {
                this.res.json({
                    error: error.message,
                });
            } else {
                tasks.name = this.req.body.name ? this.req.body.name : tasks.name;
                tasks.body = this.req.body.body ? this.req.body.body : tasks.body;
                tasks.date = Date.now();
                tasks.save();
                this.res.json(tasks);
            }
        });
    }
}
