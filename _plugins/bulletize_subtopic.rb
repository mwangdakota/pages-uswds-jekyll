module BulletizeSubTopic
  def bulletize_sub_topic(input)
    return "" if input.empty?
    arr = input.split(' ')
    "#{arr.slice(-1).gsub(/[\(\)]/,'')}. #{arr.take(arr.size - 1).join(' ')}"
  end
end

Liquid::Template.register_filter(BulletizeSubTopic)
