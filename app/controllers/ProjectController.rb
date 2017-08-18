# Model is called Project
# It's an REST API controller that renders JSON
# REST: index create show update destroy [new edit]
# app/controllers/projects_controller.rb
class ProjectController < ApplicationController
  def index
    render json: Project.all
  end

  def show
    project = Project.find(params[:id])
    render json: project
  end

  def create
    project = Project.new(project_params)

    if project.save
      render json: project, status: :created
    else
      render json: project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    project = Project.find(params[:id])
    if project.update_attributes(project_params)
      render json: project
    else
      render json: project.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    head :ok
  end

  private
  def project_params
    params.require(:project).permit(:name)
  end
end
