class TasksController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: Task.all }
    end
  end

  def create
    @task = Task.new task_params
    respond_to do |format|
      if @task.save
        format.json {render json: @task}
      else
        format.json {render json: @task, status: 403}
      end
    end
  end

  private
    def task_params
      params.require(:task).permit(:description)
    end

  end