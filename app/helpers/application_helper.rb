module ApplicationHelper
  def script_route
    "#{controller_path.camelize}#{action_name.camelize}".tr(':', '')
  end
end
